document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var db = window.openDatabase("hunterpedia", "1.0", "hunterpedia", 1000000);
    var i = 1;
    db.transaction(populateDB, errorCB, successCB);

    function populateDB(tx) {
        //ARMOR
        tx.executeSql('DROP TABLE IF EXISTS ARMOR');
        tx.executeSql('CREATE TABLE IF NOT EXISTS ARMOR (id unique, name, type, rank, img_alias)');
        //HIGH-RANK BLADEMASTER
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Leather S Armor", "Blademaster", "High", "leather")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Yukumo Sky Armor", "Blademaster", "High", "yukumo")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Piscine S Armor", "Blademaster", "High", "piscine")');i++;
        //G-RANK BLADEMASTER
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Wroggi X Armor", "Blademaster", "G", "wroggi")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Volvidon X Armor", "Blademaster", "G", "volvidon")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Lagombi X Armor", "Blademaster", "G", "lagombi")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Baggi X Armor", "Blademaster", "G", "baggi")');i++;
        //MONSTERS
        i = 1;
        tx.executeSql('DROP TABLE IF EXISTS MONSTER');
        tx.executeSql('CREATE TABLE IF NOT EXISTS MONSTER (id unique, name, type, size, weakness, img_alias)');
        //LARGE MONSTERS
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Agnaktor", "Leviathan", "Large", "Water Dragon", "agnaktor")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Glacial Agnaktor", "Leviathan", "Large", "Fire Dragon", "gAgnaktor")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Alatreon", "Elder Dragon", "Large", "Ice Water Dragon, Fire", "alatreon")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Arzuros", "Fanged Beast", "Large", "Fire Ice", "arzuros")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Barioth", "Flying Wyvern", "Large", "Fire Thunder", "barioth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Sand Barioth", "Flying Wyvern", "Large", "Ice Thunder", "sBarioth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Barroth", "Brute Wyvern", "Large", "Ice, Fire Water", "barroth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Jade Barroth", "Brute Wyvern", "Large", "Fire Thunder", "jBarroth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Brachydios", "Crushing Wyvern", "Large", "Water", "brachydios")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Ceadeus", "Elder Dragon", "Large", "Dragon Thunder", "ceadeus")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Goldbeard Ceadeus", "Elder Dragon", "Large", "Dragon", "gCeadeus")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Deviljho", "Brute Wyvern", "Large", "Dragon Thunder", "deviljho")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Savage Deviljho", "Brute Wyvern", "Large", "Thunder", "sDeviljho")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Diablos", "Flying Wyvern", "Large", "Ice", "diablos")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Black Diablos", "Flying Wyvern", "Large", "Ice", "bDiablos")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Dire Miralis", "Elder Dragon", "Large", "Dragon Ice", "dMiralis")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Duramboros", "Brute Wyvern", "Large", "Fire", "duramboros")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Rust Duramboros", "Brute Wyvern", "Large", "Water Ice", "rDuramboros")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Gigginox", "Flying Wyvern", "Large", "Fire", "gigginox")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Baleful Gigginox", "Flying Wyvern", "Large", "Water", "bGigginox")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Gobul", "Leviathan", "Large", "Thunder Fire", "gobul")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Great Jaggi", "Bird Wyvern", "Large", "Fire", "gJaggi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Great Baggi", "Bird Wyvern", "Large", "Fire", "gBaggi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Great Wroggi", "Bird Wyvern", "Large", "Ice", "gWroggi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Jhen Mohran", "Elder Dragon", "Large", "Dragon Ice", "jMohran")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Hallowed Jhen Mohran", "Elder Dragon", "Large", "Fire", "hjMohran")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Lagiacrus", "Leviathan", "Large", "Fire", "lagi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Ivory Lagiacrus", "Leviathan", "Large", "Fire Dragon", "iLagi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Abyssal Lagiacrus", "Leviathan", "Large", "Dragon", "aLagi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Lagombi", "Fanged Beast", "Large", "Fire Thunder", "lagombi")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Royal Ludroth", "Leviathan", "Large", "Fire Thunder", "rLudroth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Purple Ludroth", "Leviathan", "Large", "Fire Thunder", "pLudroth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Nargacuga", "Flying Wyvern", "Large", "Thunder Fire", "nargacuga")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Green Nargacuga", "Flying Wyvern", "Large", "Thunder Fire", "gNargacuga")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Lucent Nargacuga", "Flying Wyvern", "Large", "Ice Dragon", "lNargacuga")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Nibelsnarf", "Leviathan", "Large", "Ice Thunder", "nibelsnarf")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Plesioth", "Piscine Wyvern", "Large", "Thunder Fire", "plesioth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Green Plesioth", "Piscine Wyvern", "Large", "Thunder Fire", "gPlesioth")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Qurupeco", "Bird Wyvern", "Large", "Ice", "qurupeco")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Crimson Qurupeco", "Bird Wyvern", "Large", "Ice", "cQurupeco")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Rathalos", "Flying Wyvern", "Large", "Thunder", "rathalos")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Azure Rathalos", "Flying Wyvern", "Large", "Dragon Ice", "aRathalos")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Silver Rathalos", "Flying Wyvern", "Large", "Thunder", "sRathalos")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Rathian", "Flying Wyvern", "Large", "Dragon Thunder", "rathian")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Pink Rathian", "Flying Wyvern", "Large", "Dragon Thunder", "pRathian")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Gold Rathian", "Flying Wyvern", "Large", "Thunder Water", "gRathian")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Uragaan", "Brute Wyvern", "Large", "Water Dragon", "uragaan")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Steel Uragaan", "Brute Wyvern", "Large", "Water Dragon", "sUragaan")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Volvidon", "Fanged Beast", "Large", "Water", "volvidon")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Zinogre", "Fanged Wyvern", "Large", "Ice", "zinogre")');i++;
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Stygian Zinogre", "Fanged Wyvern", "Large", "Thunder", "sZinogre")');i++;
        //SMALL MONSTERS
        tx.executeSql('INSERT INTO MONSTER (id, name, type, size, weakness, img_alias) VALUES (' + i + ', "Altaroth", "Neopteron", "Small", "Fire", "altaroth")');i++;
    }

    function errorCB(err) {
        alert("Error processing SQL: " + err);
    }

    function successCB() {
        alert("SUCCESS!!!");
    }
}