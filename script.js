const products = [
    {id: 1, name: 'Cobre Leito 300 fios Completo Dupla Face Padrão Casal Queen King Solteiro Casa Cama 03 Peças (Azul, Queen)', image: 'https://m.media-amazon.com/images/I/414XTOYoKgL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0DSJM8CQ3/?coliid=I2G5A2QQA318WL&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$153,90', rating: '4.0 de 5 estrelas'},
    {id: 2, name: 'Jogo de Cama 300 FIOS, várias estampas e tamanhos, Lençol Percal 100% Algodão, 4 Peças - Bem Lunar (Verde Esmeralda, Queen)', image: 'https://m.media-amazon.com/images/I/41A53avjOQL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0D6Q728C6/?coliid=I2ZT24HREFGZJI&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$369,90', rating: '4.4 de 5 estrelas'},
    {id: 3, name: 'Casa Platino Conjunto de Lençol Queen de 1000 Fios, 4 Peças, Cetim Rico em Algodão, Tamanho Queen Supermacio, Com Bolso Profundo, Luxo', image: 'https://m.media-amazon.com/images/I/41vWV-WQTWL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0876DYMC8/?coliid=I2DVWY96EJUDOY&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$312,20', rating: '4.3 de 5 estrelas'},
    {id: 4, name: 'Jogo de Cama Queen Percal 400 Fios Ponto Palito 03 Peças, Antiácaro, Anti-pilling com Toque Macio - Branco', image: 'https://m.media-amazon.com/images/I/31NlscxjN-L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B08HJH47N1/?coliid=I29IQHR4AU8XN7&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$119,99', rating: '4.5 de 5 estrelas'},
    {id: 5, name: 'Travesseiro Toque de Pluma - Plumax Percal - Integralmente lavável em máquina - P/fronhas 50x70 cm - Fibrasca', image: 'https://m.media-amazon.com/images/I/31+kon4xTTL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07B9Z1ZQL/?coliid=I77URJC9PVSFL&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$69,24', rating: '4.3 de 5 estrelas'},
    {id: 6, name: 'Kit 2 Travesseiros Nasa-X Duoflex', image: 'https://m.media-amazon.com/images/I/41k5Ygc7SkL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BG3BT9FM/?coliid=I2AQQANO52ND75&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$177,40', rating: '4.7 de 5 estrelas'},
    {id: 7, name: 'PORTO BRASIL BOWL ROMA BRANCO', image: 'https://m.media-amazon.com/images/I/219NuXj-1mL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B076VTX967/?coliid=IYQVF8QKSRR7Q&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$130,55', rating: '4.6 de 5 estrelas'},
    {id: 8, name: 'Bule de Porcelana Birds 1L - Wolff', image: 'https://m.media-amazon.com/images/I/31moiSy9IBL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09C938VG5/?coliid=I2295PMMSCWHD8&colid=30BDD37MVK6WG&psc=0&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'Preço não disponível', rating: '4.6 de 5 estrelas'},
    {id: 9, name: 'Açucareiro de Porcelana Birds 300ml - Wolff', image: 'https://m.media-amazon.com/images/I/21JR+gAVMdL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09C9NGGB8/?coliid=I2N5CXYFR1THSN&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$72,83', rating: '4.6 de 5 estrelas'},
    {id: 10, name: 'Conjunto 4 Xícaras de Chá de Porcelana Birds 200ml - Wolff', image: 'https://m.media-amazon.com/images/I/31kddz+0eHL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09C9LH369/?coliid=I1OC5TLKAJJCNY&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$359,90', rating: '4.6 de 5 estrelas'},
    {id: 11, name: 'Pratos para Sobremesa de Porcelana Birds Wolff 4 Peças 19cm', image: 'https://m.media-amazon.com/images/I/21NrohcGirL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09C9QX44W/?coliid=I2H3TN8572A8OK&colid=30BDD37MVK6WG&psc=0&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$297,90', rating: '4.6 de 5 estrelas'},
    {id: 12, name: 'Serviço de Jantar e Chá 20 peças Porcelana, Branco, Schmidt', image: 'https://m.media-amazon.com/images/I/21hwWf6n32L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07CMWPDTY/?coliid=I3FIBIBA48IJ4W&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$297,90', rating: '4.8 de 5 estrelas'},
    {id: 13, name: 'Mimo Style 428 ASA46 - Tesoura Para Frango 20 Cm, Preto/Prata', image: 'https://m.media-amazon.com/images/I/31tZ4lTt6xL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07B9JMNLN/?coliid=I2B6KXHLL5WG41&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$25,12', rating: '4.4 de 5 estrelas'},
    {id: 14, name: 'Mimo Style Pinça Culinária 36cm, Feita Inteiramente em Bambu Ecológico. Tenha Mais Precisão Para Empratar Pratos, Perfeitas Auxiliares Para Restaurantes, Padarias, Bares e Muito Mais', image: 'https://m.media-amazon.com/images/I/31Nbq0plisL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B08P5BKSBF/?coliid=I92WBBD6HYKGW&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$26,52', rating: '4.6 de 5 estrelas'},
    {id: 15, name: 'Kit 3 Tábuas Teca c/Suporte Organizador de Aço, Stolf', image: 'https://m.media-amazon.com/images/I/41iMyQAlQnL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B08VRP737Y/?coliid=I1A2QN652GRA9K&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$107,28', rating: '4.4 de 5 estrelas'},
    {id: 16, name: 'Conjunto de Utensílios de Bambu de 06 Peças', image: 'https://m.media-amazon.com/images/I/415igPdfDZL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0C6BSF83H/?coliid=I20WSWFOE4DPDO&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$119,90', rating: '4.6 de 5 estrelas'},
    {id: 17, name: 'Descascador Suiço, Preto, Victorinox', image: 'https://m.media-amazon.com/images/I/31dakHG7stL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0006J2BHK/?coliid=IMC7XBKU68QWE&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$43,80', rating: '4.5 de 5 estrelas'},
    {id: 18, name: 'Oikos - Escova de Limpeza Multiuso com Cabo de Bambu', image: 'https://m.media-amazon.com/images/I/31Sw8mk-sAL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BMNN2MFL/?coliid=I248613H0FWYWH&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$19,90', rating: '4.7 de 5 estrelas'},
    {id: 19, name: 'Oikos - Rodo de Pia Dobrável com Cabo de Bambu', image: 'https://m.media-amazon.com/images/I/21f53PpNzgL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BMNC1P77/?coliid=I9AQ3PH0FNZBR&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$20,90', rating: '4.8 de 5 estrelas'},
    {id: 20, name: 'Mimo Style Conjunto de 4 Xícaras Medidoras, Próprias Para Ingredientes Secos ou Líquidos, Produto Leve e Fácil de Manusear, Possui Bicos Para Vazão de Líquidos, Material de Aço Inox de Qualidade', image: 'https://m.media-amazon.com/images/I/4162oFQtLNL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B076JL8Y9R/?coliid=I133QAFD9XGZ1C&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$17,88', rating: '4.7 de 5 estrelas'},
    {id: 21, name: 'Jogo de Utensílios com 7 Peças Mesa Mimo Style Prata', image: 'https://m.media-amazon.com/images/I/31R71+UqP-L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B077SNVWH9/?coliid=I21S89AC82OITD&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$140,89', rating: '4.6 de 5 estrelas'},
    {id: 22, name: 'Ralador Fatiador De Alimentos 4 Faces Multiuso Aço Inox Manual Para Cozinha', image: 'https://m.media-amazon.com/images/I/31JQqM80VOL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0D3WGMZL7/?coliid=I1JLBE96CXWQKE&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$41,65', rating: '4.8 de 5 estrelas'},
    {id: 23, name: 'Sanremo, Balde Plástico 15L', image: 'https://m.media-amazon.com/images/I/31ocdZdXGAL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B00NHSJ5PS/?coliid=I3B2VE13LI90VI&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$44,91', rating: '4.8 de 5 estrelas'},
    {id: 24, name: 'Sanremo - Balde Plástico Oval de 14 Litros, Linha Hydrus', image: 'https://m.media-amazon.com/images/I/31i+V2mCeZL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0779N39CK/?coliid=I3U45TVTGOBQ0V&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$37,71', rating: '4.8 de 5 estrelas'},
    {id: 25, name: 'Furadeira e Parafusadeira com Bateria 12V Sem Fio Ajuste de Torque 18Nm - Pró Euro', image: 'https://m.media-amazon.com/images/I/51oVpCrSMFL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BKB82VVR/?coliid=IZD8MXK39P5ZF&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$169,99', rating: '3.9 de 5 estrelas'},
    {id: 26, name: 'Sparta Maleta de ferramentas kit com 165 peças', image: 'https://m.media-amazon.com/images/I/514+Orfu4WL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BBJPCMQM/?coliid=I81YV6O44V96T&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$123,33', rating: '4.7 de 5 estrelas'},
    {id: 27, name: 'Panela de Pressão Tramontina Vancouver Effect em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 20 cm 4,5 L', image: 'https://m.media-amazon.com/images/I/31tHjOq51WL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CD4SCM33/?coliid=I27ZZ337CULEAV&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$184,38', rating: '4.7 de 5 estrelas'},
    {id: 28, name: 'Mimo Style, Jogo de Panelas Cerâmica 10 Peças Indução Pratic Cook Marmol', image: 'https://m.media-amazon.com/images/I/41J-5PlklAL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0D8MSBKNR/?coliid=I6K30Y11PJFC2&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$468,28', rating: '4.6 de 5 estrelas'},
    {id: 29, name: 'Pano De Prato Xadrez Gigante Kit Com 5 Peças', image: 'https://m.media-amazon.com/images/I/41U8TEPy0HL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09C11SX9K/?coliid=I4TEKXA8QE7ZT&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$23,59', rating: '4.2 de 5 estrelas'},
    {id: 30, name: 'Pano de Prato Copa Atoalhado Felpudo Teka Chef Premium (Kit com 6 unidades)', image: 'https://m.media-amazon.com/images/I/4171fHf--gL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BZ36M38X/?coliid=I31MAV4GMF8FVI&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$71,74', rating: '4.7 de 5 estrelas'},
    {id: 31, name: 'Kit 10 Panos Microfibra Lavável Multiuso 28x28cm Reutilizável Pia Móveis Carro Limpeza Geral Casa Flanela - (CORES SORTIDAS) Loja Roccamare', image: 'https://m.media-amazon.com/images/I/51yWv-J9NVL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CS3SSP12/?coliid=I35ZNN1NEB0WN4&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$42,99', rating: '4.3 de 5 estrelas'},
    {id: 32, name: 'Pano De Chão Para Limpeza Grande Grosso 45x65 Para Casa Escritório Empresas Kit Com 10', image: 'https://m.media-amazon.com/images/I/31gAnHXK+4L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0C4JZFN5T/?coliid=I130HJ0JFAA67G&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$55,89', rating: '4.4 de 5 estrelas'},
    {id: 33, name: 'Rodo Vai e Vem Plus com Cabo, Tamanho P, Cor Verde Tiffany, Linha Noviça, Bettanin', image: 'https://m.media-amazon.com/images/I/21B+pH4GQgL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07X5R6VF4/?coliid=I1023H2A5A7YEK&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$36,99', rating: '4.4 de 5 estrelas'},
    {id: 34, name: 'Mop FIT Giratório com 2 refis microfibra, balde com 8 litros, MOP5010, Flash Limp', image: 'https://m.media-amazon.com/images/I/31NEWLmKtsL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0783QWRD1/?coliid=I1BCH39TDEVEE6&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$93,65', rating: '4.6 de 5 estrelas'},
    {id: 35, name: 'Vassoura Original Concept Noviça Anis', image: 'https://m.media-amazon.com/images/I/41lDS3GB4mL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0779M2S3D/?coliid=I3MHAA4W19EU42&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$33,99', rating: '4.6 de 5 estrelas'},
    {id: 36, name: 'Vassoura Uso Externo com Cabo, Linha Noviça, Bettanin', image: 'https://m.media-amazon.com/images/I/41NTH3-UwJL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0779NVSD3/?coliid=I3KJ20QC3BC4KR&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$33,99', rating: '4.5 de 5 estrelas'},
    {id: 37, name: 'Genérico Pá com Cabo Fixo - Aço Carbono ou Inox - Verde - 8.5 cm x 25 cm x 26 cm', image: 'https://m.media-amazon.com/images/I/21n2eszJ3eL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0DJRSZCMM/?coliid=I3823ZVACZFU57&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$29,90', rating: '4.8 de 5 estrelas'},
    {id: 38, name: 'Oster OLIQ610 1400 Full - Liquidificador, 3,2L, 110V, 1400W, Preto', image: 'https://m.media-amazon.com/images/I/41uM5Abd8hL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B08DFCF9HW/?coliid=ITE383VU2O155&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$199,00', rating: '4.5 de 5 estrelas'},
    {id: 39, name: 'Purificador de Água Electrolux Compacto Pure 4x Cinza Bivolt Pe12g', image: 'https://m.media-amazon.com/images/I/31sjjB5Z75L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B08X66RQ48/?coliid=I2Z0E4Y2K8XOAY&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$629,90', rating: '4.6 de 5 estrelas'},
    {id: 40, name: 'Conjunto Para Banheiro Completo Lixeira Dispenser Escova (Branco)', image: 'https://m.media-amazon.com/images/I/31hMhLw9DRL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CWHM58T3/?coliid=IULXUPI6IDIWL&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$94,90', rating: '4.2 de 5 estrelas'},
    {id: 41, name: 'Kit 2 Nichos Prateleiras Suporte Porta Shampoo Box Banheiro Sem Furar Parede (Preto)', image: 'https://m.media-amazon.com/images/I/41ZyjkE+V4L._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CP2WT5BS/?coliid=I4BE3RGRVRUI3&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$44,79', rating: '4.5 de 5 estrelas'},
    {id: 42, name: 'Momo Lifestyle Tapete para Banheiro de Terra Diatomácea Drytomita, Seca Rápido para Saída de Box, Antiderrapante (Cinza Linho, 60 x 39 cm)', image: 'https://m.media-amazon.com/images/I/41QvW5rv3UL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0812CSL1P/?coliid=I2IWAKLEVUJA2L&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$210,72', rating: '4.5 de 5 estrelas'},
    {id: 43, name: 'Jogo de toalhas Buddemeyer Doris Banho Cinza Claro/Cinza 5 peças', image: 'https://m.media-amazon.com/images/I/41yWB2MPcRL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CV641SQ8/?coliid=ITLI6EYEDINEL&colid=30BDD37MVK6WG&psc=0&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'Preço não disponível', rating: '4.4 de 5 estrelas'},
    {id: 44, name: 'Jogo de Banho 4 Peças Romance Dohler Aveludada 100% Algodão Toalha Fio Penteado Coração Borboleta (Branco/Bege)', image: 'https://m.media-amazon.com/images/I/410MdwjBEpL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BVXH6VF1/?coliid=I2DSKK6KD9SKG1&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$190,00', rating: '4.6 de 5 estrelas'},
    {id: 45, name: 'Kit Organizador de Armário para Cozinha - 7 Peças (Preto)', image: 'https://m.media-amazon.com/images/I/51V8W8hc4dS._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B086BRZB92/?coliid=IV90UYTVNUTDV&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$105,50', rating: '4.6 de 5 estrelas'},
    {id: 46, name: 'Fruteira de Chão 3 Cestos com Tampo de Madeira e Rodas, Cor Preto, Metaltru', image: 'https://m.media-amazon.com/images/I/41ODlNaN5FL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0BC9RHBQ5/?coliid=I32ACW8833R4DL&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$129,90', rating: '4.2 de 5 estrelas'},
    {id: 47, name: 'WOLFF Garrafa Térmica de Plástico com Cabo de Madeira Nórdica 1L Preta - Mesa Posta - Itens Para Casa - Utensílios de Cozinha - Perfeita Para Café e Chá', image: 'https://m.media-amazon.com/images/I/31eGYBppRfL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B09CB9JZHV/?coliid=I287N2FGSFW45Y&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$73,26', rating: '4.3 de 5 estrelas'},
    {id: 48, name: 'Conjunto De Espátula Para Manteiga 6 Pç Tramontina Inox', image: 'https://m.media-amazon.com/images/I/31khPWVydCL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B076M7RJ3Z/?coliid=I2AT2AUKOT0SL&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$37,22', rating: '4.7 de 5 estrelas'},
    {id: 49, name: 'Faqueiro Tramontina Búzios em Aço Inox 36 Peças', image: 'https://m.media-amazon.com/images/I/41X++iKg9HL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0DJH88YN9/?coliid=I1MVQBXYNK025R&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$99,00', rating: 'Sem avaliações'},
    {id: 50, name: 'Mor - Afiador De Faca 9.5Cm X 5Cm Linha Do Assador', image: 'https://m.media-amazon.com/images/I/3187UyKI8GL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B076X79L8P/?coliid=I2GI8MX0CLA9Q9&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$24,00', rating: '4.6 de 5 estrelas'},
    {id: 51, name: 'Jogo de Facas Tramontina Plenus com Lâminas em Aço Inox e Cabos de Polipropileno Preto 9 Peças', image: 'https://m.media-amazon.com/images/I/41h6o+NHhiL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07WR4TP9W/?coliid=IP23HT910W22G&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$79,90', rating: '4.9 de 5 estrelas'},
    {id: 52, name: 'Mor - Tábua Retangular Bamboo 30Cm X 20Cm', image: 'https://m.media-amazon.com/images/I/51KHeMF4nJL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0778TXP77/?coliid=I2D0K11KDL0HE2&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$27,00', rating: '4.8 de 5 estrelas'},
    {id: 53, name: 'Escorredor de Louça Inox com Porta Pratos Talheres Copos Modular Master (Preto)', image: 'https://m.media-amazon.com/images/I/51XpjycV7CL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0C8GX6GBZ/?coliid=I22DSOHQSP0DHJ&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$208,90', rating: '4.6 de 5 estrelas'},
    {id: 54, name: 'Lixeira para cozinha banheiro com pedal OU Trium 30 litros preta', image: 'https://m.media-amazon.com/images/I/21k1QBjxUQL._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B0CWBR5Z9F/?coliid=IPJBD74A2Y2DT&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$126,90', rating: '4.3 de 5 estrelas'},
    {id: 55, name: 'Lixeira Trium 4,7L Ou Bege', image: 'https://m.media-amazon.com/images/I/21ee0euU8ML._SS135_.jpg', link: 'https://www.amazon.com.br/dp/B07GPSNBST/?coliid=I13P8ZLP5OGJT9&colid=30BDD37MVK6WG&psc=1&ref_=list_c_wl_lv_vv_lig_dp_it', price: 'R$48,33', rating: '4.9 de 5 estrelas'},
    {id: 56, name: 'Jogo de Tapetes para Cozinha 3 Peças Decolab Básico | Kit com 1 Passadeira e 2 Tapetes para Cozinha | Design Liso em Algodão Premium | Tapetes Laváveis e Duráveis (Amarelo-mostarda)', image: 'https://m.media-amazon.com/images/I/71rS1R8lgBL._AC_SL1200_.jpg', link: 'https://www.amazon.com.br/Decolab-Cozinha-Algod%C3%A3o-Amarelo-mostarda-Branco-cru/dp/B0CYM3LYF4/ref=sr_1_13?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=335OZ8BWJUKLZ&dib=eyJ2IjoiMSJ9.mT3qnEZ1IPvEtvgL5UhAgErHeMOzdIekPqsKcH4BUarGW4Y70vfWHYzmQS_s1cHW_oJD0qN_7H6i3FrBvEf5MVn3VfpC0jAT0EqDuaNUGAXjJ6iMy4ghtT6X9ZSE-wZL6SEw7c-XT2qo7QE2xmkPg7ns3Ij6ZPO8drbY974DBON_XJ-mZSfXfR2WPAdN_2hNTegilCjRbapl5WPLxV_KbWqNIRZr0GXv9ZD9xjy8GwpteUcxCjQAH4Xs12E722LToTM-06D1WqVWMk5YkWmv6luR8PPxnSP5R3G3jyxcPrg.M4bPZu3dO5Ds7lkEhZ9rwMRWGK2_O3fK9XI16i_N9JE&dib_tag=se&keywords=jogo%2Bde%2Btapete&qid=1743602072&sprefix=jogo%2Bde%2Btapete%2Caps%2C265&sr=8-13&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1', price: 'R$89,90', rating: '4.4 de 5 estrelas'}
    ];

// Senha fixa para todos os usuários
const correctPassword = "1234"; 
let currentUser = null;
let boughtProducts = JSON.parse(localStorage.getItem("boughtProducts")) || [];
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === correctPassword) {
        currentUser = username;
        localStorage.setItem("currentUser", currentUser);
        window.location.href = "instructions.html"; // Redireciona para a página de compras
    } else {
        document.getElementById("login-error").style.display = "block";
    }
}

// Função para abrir o link de compra
function buyNow(link) {
    window.open(link, "_blank");
}

// Marca um produto como comprado
function markAsBought(productId) {
    const loggedUserId = localStorage.getItem("currentUser");
    if (!loggedUserId) {
        alert("Você precisa estar logado para marcar um produto como comprado.");
        return;
    }
    // Se o produto ainda não foi comprado, registra a compra
    const alreadyBought = boughtProducts.some(p => p.productId === productId);
    if (!alreadyBought) {
        boughtProducts.push({ productId, userId: loggedUserId });
        localStorage.setItem("boughtProducts", JSON.stringify(boughtProducts));
    }
    applyFilters();
}

// Cancela a compra, removendo somente se o usuário logado for o comprador
function cancelPurchase(productId) {
    const loggedUserId = localStorage.getItem("currentUser");
    boughtProducts = boughtProducts.filter(p => !(p.productId === productId && p.userId === loggedUserId));
    localStorage.setItem("boughtProducts", JSON.stringify(boughtProducts));
    applyFilters();
}

// Aplica os filtros (toggle e faixa de preço)
function applyFilters() {

    // Obtém estado do toggle "Minhas Compras"
    const showOnlyBought = document.getElementById("toggle-purchases").classList.contains("active");
    
    // Obtém faixa de preço
    const minPriceInput = document.getElementById("min-price").value;
    const maxPriceInput = document.getElementById("max-price").value;
    const minPrice = parseFloat(minPriceInput.replace("R$", "").replace(",", ".")) || 0;
    const maxPrice = parseFloat(maxPriceInput.replace("R$", "").replace(",", ".")) || Infinity;
    
    renderProducts(showOnlyBought, minPrice, maxPrice);
}

function clickedGotIt() {
    window.location.href = "shop.html";
}

// Renderiza os produtos considerando os filtros
function renderProducts(showOnlyBought = false, minPrice = 0, maxPrice = Infinity) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    const loggedUserId = localStorage.getItem("currentUser");

    products.forEach(product => {
        // Converte o preço para número (assumindo formato "R$123,45")
        const productPrice = parseFloat(product.price.replace("R$", "").replace(",", "."));
        if (productPrice < minPrice || productPrice > maxPrice) return; // Pula se fora da faixa

        // Verifica se o produto foi comprado e se o usuário logado é o dono
        const purchase = boughtProducts.find(p => p.productId === product.id);
        const isBought = !!purchase;
        const isOwner = purchase && purchase.userId === loggedUserId;

        // Se o toggle estiver ativado, exibe somente os produtos comprados pelo usuário
        if (showOnlyBought && !isOwner) return;

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

        if (isBought) {
            if (isOwner) {
                const cancelButton = document.createElement("button");
                cancelButton.classList.add("cancel-btn");
                cancelButton.textContent = "❌ Cancelar Compra";
                cancelButton.onclick = () => cancelPurchase(product.id);
                actionsDiv.appendChild(cancelButton);
            } else {
                const soldOutSpan = document.createElement("span");
                soldOutSpan.classList.add("sold-out");
                soldOutSpan.textContent = "Indisponível";
                actionsDiv.appendChild(soldOutSpan);
            }
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

// Configura o evento do toggle "Minhas Compras"
document.getElementById("toggle-purchases").addEventListener("click", function () {
    this.classList.toggle("active");
    applyFilters();
});

// Configura os eventos dos inputs de preço para filtrar automaticamente
document.getElementById("min-price").addEventListener("input", applyFilters);
document.getElementById("max-price").addEventListener("input", applyFilters);

// Quando a página carregar, garante que o toggle esteja desativado e aplica os filtros
window.onload = function () {
    const toggleButton = document.getElementById("toggle-purchases");
    if (toggleButton) toggleButton.classList.remove("active");
    applyFilters();
};

function togglePurchases() {
    const button = document.getElementById("toggle-purchases");
    toggleSidebar();
    if (button.textContent.includes("Minhas Compras")) {
        button.textContent = "🏠 Início";
        // Aqui você pode adicionar qualquer lógica para exibir as compras
    } else {
        button.textContent = "🛍️ Minhas Compras";
        // Aqui você pode adicionar qualquer lógica para voltar à tela inicial
    }
}


function createGlitter() {
    const glitter = document.createElement("div");
    glitter.classList.add("glitter");

    // Posiciona aleatoriamente
    glitter.style.left = `${Math.random() * window.innerWidth}px`;
    glitter.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(glitter);

    setTimeout(() => glitter.remove(), 1000);
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    
    sidebar.classList.toggle("active"); // Alterna a classe "active"
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

if (document.getElementById("product-container")) {
    renderProducts(products);
}

// Criar glitter a cada 200ms
setInterval(createGlitter, 200);