// Supondo que você já tenha inicializado o Firebase e tenha acesso ao Firestore:
const db = firebase.firestore(); // Se estiver usando v8 ou compat; se usar modular, adapte conforme a documentação

// Senha fixa para todos os usuários
const correctPassword = "1234"; 
let currentUser = null;

// Função de login permanece a mesma (já que está usando LocalStorage para salvar o currentUser)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === correctPassword) {
        currentUser = username;
        localStorage.setItem("currentUser", currentUser);
        window.location.href = "instructions.html"; // ou shop.html, conforme sua estrutura
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

// Função para abrir o link de compra
function buyNow(link) {
    window.open(link, "_blank");
}

// --- Funções utilizando Firebase Firestore para armazenar compras ---

// Marca um produto como comprado: adiciona o ID do produto no array de "produtos" do documento do usuário na coleção "compras".
function markAsBought(productId) {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("Você precisa estar logado para marcar um produto como comprado.");
        return;
    }
    const userDocRef = db.collection("compras").doc(user.uid);
    userDocRef.get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            if (!data.produtos || !data.produtos.includes(productId)) {
                userDocRef.update({
                    produtos: firebase.firestore.FieldValue.arrayUnion(productId)
                }).then(() => renderProducts());
            }
        } else {
            // Se não houver documento, cria um novo
            userDocRef.set({ produtos: [productId] }).then(() => renderProducts());
        }
    }).catch(err => {
        console.error("Erro ao marcar compra:", err);
    });
}

// Cancela a compra do produto: remove do array apenas se o usuário logado for o dono.
function cancelPurchase(productId) {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("Você precisa estar logado para cancelar uma compra.");
        return;
    }
    const userDocRef = db.collection("compras").doc(user.uid);
    userDocRef.update({
        produtos: firebase.firestore.FieldValue.arrayRemove(productId)
    }).then(() => renderProducts())
      .catch(err => console.error("Erro ao cancelar compra:", err));
}

// Renderiza os produtos considerando os filtros e as compras do usuário no Firestore.
async function renderProducts(showOnlyBought = false, minPrice = 0, maxPrice = Infinity) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    const user = firebase.auth().currentUser;
    let myPurchases = [];
    if (user) {
        const userDoc = await db.collection("compras").doc(user.uid).get();
        if (userDoc.exists) {
            myPurchases = userDoc.data().produtos || [];
        }
    }
    products.forEach(product => {
        // Converte preço (formato "R$123,45") para número
        const productPrice = parseFloat(product.price.replace("R$", "").replace(",", "."));
        if (productPrice < minPrice || productPrice > maxPrice) return;
        // Se o filtro de "Minhas Compras" estiver ativado, mostra apenas os produtos que o usuário comprou
        if (showOnlyBought && !myPurchases.includes(product.id)) return;
        
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        
        const img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";
        img.alt = product.name;
        
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("product-name");
        nameDiv.textContent = product.name.length > 60 ? product.name.substring(0, 60) + "..." : product.name;
        
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        priceDiv.textContent = product.price;
        
        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");
        
        // Se o produto já foi comprado (pelo usuário), exibe botão para cancelar.
        if (myPurchases.includes(product.id)) {
            const cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn");
            cancelButton.textContent = "❌ Cancelar Compra";
            cancelButton.onclick = () => cancelPurchase(product.id);
            actionsDiv.appendChild(cancelButton);
        } else {
            const boughtButton = document.createElement("button");
            boughtButton.textContent = "✅ Já Comprei";
            boughtButton.onclick = () => markAsBought(product.id);
            actionsDiv.appendChild(boughtButton);
            
            const buyButton = document.createElement("button");
            buyButton.textContent = "🔗 Quero Comprar";
            buyButton.onclick = () => buyNow(product.link);
            actionsDiv.appendChild(buyButton);
        }
        
        productDiv.appendChild(img);
        productDiv.appendChild(nameDiv);
        productDiv.appendChild(priceDiv);
        productDiv.appendChild(actionsDiv);
        container.appendChild(productDiv);
    });
}

// Filtros de preço e toggle "Minhas Compras"
function applyFilters() {
    const showOnlyBought = document.getElementById("toggle-purchases").classList.contains("active");
    const minPriceInput = document.getElementById("min-price").value;
    const maxPriceInput = document.getElementById("max-price").value;
    const minPrice = parseFloat(minPriceInput.replace("R$", "").replace(",", ".")) || 0;
    const maxPrice = parseFloat(maxPriceInput.replace("R$", "").replace(",", ".")) || Infinity;
    renderProducts(showOnlyBought, minPrice, maxPrice);
}

function clickedGotIt() {
    window.location.href = "shop.html";
}

// Configura o evento do toggle "Minhas Compras"
document.getElementById("toggle-purchases").addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
        this.textContent = "🏠 Início";
    } else {
        this.textContent = "🛍️ Minhas Compras";
    }
    applyFilters();
});

// Configura os eventos dos inputs de preço para filtrar automaticamente
document.getElementById("min-price").addEventListener("input", applyFilters);
document.getElementById("max-price").addEventListener("input", applyFilters);

// Ao carregar a página, garantir que o toggle esteja desativado e aplicar os filtros
window.onload = function () {
    const toggleButton = document.getElementById("toggle-purchases");
    if (toggleButton) toggleButton.classList.remove("active");
    applyFilters();
};

// Glitter e função de sidebar (se você tiver essas partes, elas permanecem)
function createGlitter() {
    const glitter = document.createElement("div");
    glitter.classList.add("glitter");
    glitter.style.left = `${Math.random() * window.innerWidth}px`;
    glitter.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(glitter);
    setTimeout(() => glitter.remove(), 1000);
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    sidebar.classList.toggle("active");
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}

function help() {
    window.location.href = "instructions.html";
}

function toggleSuggestion() {
    const suggestionBox = document.getElementById("suggestion-box");
    suggestionBox.style.display = suggestionBox.style.display === "none" ? "block" : "none";
}

// Se estiver na página de produtos, renderiza os produtos
if (document.getElementById("product-container")) {
    renderProducts();
}

// Cria glitter a cada 200ms
setInterval(createGlitter, 200);
