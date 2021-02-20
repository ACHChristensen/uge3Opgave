//A
    //a)
    var boys = ["Peter", "lars", "Ole"];
    var girls = ["Janne", "hanne", "Sanne"];

    //b)
    var all = boys.concat(girls);

    //c.1)
    console.log(all.join());

    //c.2)
    console.log(all.join("-"));

    //d)
    all.push("Lone", "Gitte");
    console.log(all);

    //e) 
    all.unshift("Hans", "Kurt");
    console.log(all);

    //f)
    all.shift("Hans");
    console.log(all);

    //g)
    all.pop("Gitte");
    console.log(all);

    //h)
    all.splice(3,2);
    console.log(all);


    //i)
    all.reverse();
    console.log(all);

    //j
    all.sort();
    console.log(all);

    //k) ???

    //l)
    var all3 = all.map(name=>name.toUpperCase());
    console.log(all3);

    //m)
    var all2 = all;
    console.log(all2.filter(name=> name.startsWith('l')));
    var l = all2.filter(name=> name.startsWith('l'));
    console.log(all2.filter(name=> name.startsWith('L')));
    var L = all2.filter(name=> name.startsWith('L'));

    var all4 = L.concat(l);
    console.log(all4);
    
//B