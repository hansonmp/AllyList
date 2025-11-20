// --- Data Injection (V7: Synthetic data with Lat/Lng) ---
const graphData = {
    "nodes": [
        {"Record_ID":"43","Type":"NODE","ID":"P-014","Name":"Kin","City":"Boise","State":"ID","Lat":"43.6150","Lng":"-116.2023","Emoji":"🍽️","Cuisine":"Modern American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.5,"Reviews":230,"MapLink":"https://maps.app.goo.gl/Kin"},
        {"Record_ID":"44","Type":"NODE","ID":"N-013","Name":"Kris Komori","City":"Boise (Kin)","State":"ID","Lat":"43.6150","Lng":"-116.2023","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"45","Type":"NODE","ID":"P-015","Name":"L'Etoile","City":"Madison","State":"WI","Lat":"43.0731","Lng":"-89.3837","Emoji":"🍽️","Cuisine":"French","Flags":"🇫🇷","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.7,"Reviews":450,"MapLink":"https://maps.app.goo.gl/LEtoile"},
        {"Record_ID":"46","Type":"NODE","ID":"N-014","Name":"Tory Miller","City":"Madison (L'Etoile)","State":"WI","Lat":"43.0731","Lng":"-89.3837","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"47","Type":"NODE","ID":"P-016","Name":"Ardent","City":"Milwaukee","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"🍽️","Cuisine":"Tasting Menu","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.6,"Reviews":190,"MapLink":"https://maps.app.goo.gl/Ardent"},
        {"Record_ID":"48","Type":"NODE","ID":"N-015","Name":"Justin Carlisle","City":"Milwaukee (Ardent)","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"49","Type":"NODE","ID":"P-017","Name":"Mixtli","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍽️","Cuisine":"Mexican (Rotating)","Flags":"🇲🇽","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.8,"Reviews":310,"MapLink":"https://maps.app.goo.gl/Mixtli"},
        {"Record_ID":"50","Type":"NODE","ID":"N-016","Name":"Rico Torres","City":"San Antonio (Mixtli)","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"51","Type":"NODE","ID":"P-018","Name":"The Southern","City":"Augusta","State":"GA","Lat":"33.4735","Lng":"-82.0105","Emoji":"🍽️","Cuisine":"Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.2,"Reviews":680,"MapLink":"https://maps.app.goo.gl/TheSouthern"},
        {"Record_ID":"52","Type":"NODE","ID":"N-017","Name":"Brandon Rushing","City":"Augusta (The Southern)","State":"GA","Lat":"33.4735","Lng":"-82.0105","Emoji":"👨🏿‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"53","Type":"NODE","ID":"P-019","Name":"Blackbird Kitchen","City":"Bozeman","State":"MT","Lat":"45.6811","Lng":"-111.0494","Emoji":"🍽️","Cuisine":"Italian","Flags":"🇮🇹","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.4,"Reviews":390,"MapLink":"https://maps.app.goo.gl/Blackbird"},
        {"Record_ID":"54","Type":"NODE","ID":"N-018","Name":"Robert Wallace","City":"Bozeman (Blackbird)","State":"MT","Lat":"45.6811","Lng":"-111.0494","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"55","Type":"NODE","ID":"P-020","Name":"Preserved Restaurant","City":"St Augustine","State":"FL","Lat":"29.8940","Lng":"-81.3110","Emoji":"🍽️","Cuisine":"Coastal Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.3,"Reviews":510,"MapLink":"https://maps.app.goo.gl/Preserved"},
        {"Record_ID":"56","Type":"NODE","ID":"N-019","Name":"Jeffrey Harding","City":"St Augustine (Preserved)","State":"FL","Lat":"29.8940","Lng":"-81.3110","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"57","Type":"NODE","ID":"P-021","Name":"FIG","City":"Charleston","State":"SC","Lat":"32.7885","Lng":"-79.9328","Emoji":"🍽️","Cuisine":"Seasonal American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.7,"Reviews":750,"MapLink":"https://maps.app.goo.gl/FIG"},
        {"Record_ID":"58","Type":"NODE","ID":"N-020","Name":"Jason Stanhope","City":"Charleston (FIG)","State":"SC","Lat":"32.7885","Lng":"-79.9328","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"59","Type":"NODE","ID":"P-022","Name":"Vicia","City":"St Louis","State":"MO","Lat":"38.6391","Lng":"-90.2312","Emoji":"🍽️","Cuisine":"Vegetable-Forward","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.5,"Reviews":350,"MapLink":"https://maps.app.goo.gl/Vicia"},
        {"Record_ID":"60","Type":"NODE","ID":"N-021","Name":"Michael Gallina","City":"St Louis (Vicia)","State":"MO","Lat":"38.6391","Lng":"-90.2312","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"61","Type":"NODE","ID":"P-023","Name":"Au Courant Regional","City":"Omaha","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"🍽️","Cuisine":"New American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.4,"Reviews":280,"MapLink":"https://maps.app.goo.gl/AuCourant"},
        {"Record_ID":"62","Type":"NODE","ID":"N-022","Name":"Chris Hughes","City":"Omaha (Au Courant)","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"63","Type":"NODE","ID":"P-024","Name":"Perch","City":"Gulf Shores","State":"AL","Lat":"30.2520","Lng":"-87.7001","Emoji":"🍽️","Cuisine":"Seafood","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.1,"Reviews":420,"MapLink":"https://maps.app.goo.gl/Perch"},
        {"Record_ID":"64","Type":"NODE","ID":"N-023","Name":"Wesley True","City":"Gulf Shores (Perch)","State":"AL","Lat":"30.2520","Lng":"-87.7001","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"65","Type":"NODE","ID":"P-025","Name":"Young Joni","City":"St Paul","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"🍽️","Cuisine":"Pizza/Asian Fusion","Flags":"🇺🇸🇰🇷","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.6,"Reviews":890,"MapLink":"https://maps.app.goo.gl/YoungJoni"},
        {"Record_ID":"66","Type":"NODE","ID":"N-024","Name":"Ann Kim","City":"St Paul (Young Joni)","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"67","Type":"NODE","ID":"P-026","Name":"The Plum Cafe","City":"Cleveland","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"🍽️","Cuisine":"Seasonal American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.3,"Reviews":310,"MapLink":"https://maps.app.goo.gl/ThePlum"},
        {"Record_ID":"68","Type":"NODE","ID":"N-025","Name":"Brett Sawyer","City":"Cleveland (The Plum)","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"69","Type":"NODE","ID":"P-027","Name":"Capital Bar","City":"Little Rock","State":"AR","Lat":"34.7465","Lng":"-92.2896","Emoji":"🍽️","Cuisine":"Fine Dining","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.4,"Reviews":180,"MapLink":"https://maps.app.goo.gl/CapitalBar"},
        {"Record_ID":"70","Type":"NODE","ID":"N-026","Name":"Matt Bell","City":"Little Rock (Capital Bar)","State":"AR","Lat":"34.7465","Lng":"-92.2896","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"71","Type":"NODE","ID":"P-028","Name":"Crow's Nest","City":"Anchorage","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"🍽️","Cuisine":"Pacific Northwest","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.7,"Reviews":210,"MapLink":"https://maps.app.goo.gl/CrowsNest"},
        {"Record_ID":"72","Type":"NODE","ID":"N-027","Name":"Danny Peñaloza","City":"Anchorage (Crow's Nest)","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"73","Type":"NODE","ID":"N-028","Name":"Erik Anderson","City":"Multiple (The Grey)","State":"NA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"74","Type":"NODE","ID":"A-003","Name":"Best Chef: Northwest Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"75","Type":"NODE","ID":"A-004","Name":"Best Chef: Midwest Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"76","Type":"NODE","ID":"A-005","Name":"Outstanding Chef Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2019", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"77","Type":"NODE","ID":"A-006","Name":"Top Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Competition","Year":"2024", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"}, // Changed to Competition
        {"Record_ID":"78","Type":"NODE","ID":"A-008","Name":"Best New Restaurant Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2019", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"79","Type":"NODE","ID":"A-013","Name":"Next Level Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Competition","Year":"2024", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"}, // Changed to Competition
        {"Record_ID":"80","Type":"NODE","ID":"A-014","Name":"MasterChef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Competition","Year":"2024", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"}, // Changed to Competition
        {"Record_ID":"81","Type":"NODE","ID":"A-016","Name":"Best Chef: South Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"82","Type":"NODE","ID":"A-017","Name":"Outstanding Chef Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"83","Type":"NODE","ID":"A-018","Name":"Best New Restaurant Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"84","Type":"NODE","ID":"A-019","Name":"Best Chef: Mountain Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"85","Type":"NODE","ID":"A-020","Name":"Food & Wine Best New Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"86","Type":"NODE","ID":"A-021","Name":"The Final Table","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Competition","Year":"2018", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"}, // Changed to Competition
        {"Record_ID":"87","Type":"NODE","ID":"A-026","Name":"One MICHELIN Star","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2024", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"88","Type":"NODE","ID":"P-029","Name":"The Grey","City":"Savannah","State":"GA","Lat":"32.0760","Lng":"-81.0880","Emoji":"🍽️","Cuisine":"Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.5,"Reviews":620,"MapLink":"https://maps.app.goo.gl/TheGrey"},
        {"Record_ID":"89","Type":"NODE","ID":"P-030","Name":"Pēppē","City":"NYC","State":"NY","Lat":"40.7128","Lng":"-74.0060","Emoji":"🍽️","Cuisine":"Modern Fine Dining","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.6,"Reviews":150,"MapLink":"https://maps.app.goo.gl/Peppe"},
        {"Record_ID":"90","Type":"NODE","ID":"N-029","Name":"Nini Nguyen","City":"NYC (Pēppē)","State":"NY","Lat":"40.7128","Lng":"-74.0060","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"91","Type":"NODE","ID":"N-031","Name":"Joe Sasto","City":"SF/LA (Nomad/La Tavola)","State":"CA","Lat":"34.0522","Lng":"-118.2437","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"92","Type":"NODE","ID":"N-032","Name":"Kelsey Clark","City":"Dothan (The Dothan Nurseries)","State":"AL","Lat":"31.2234","Lng":"-85.3900","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"93","Type":"NODE","ID":"N-034","Name":"Buddha Lo","City":"NYC (Pēppē)","State":"NY","Lat":"40.7128","Lng":"-74.0060","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇦🇺","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"94","Type":"NODE","ID":"N-041","Name":"Timothy Hollingsworth","City":"LA (Otium)","State":"CA","Lat":"34.0522","Lng":"-118.2437","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"95","Type":"NODE","ID":"N-044","Name":"Michael Leonard","City":"Multiple (Crow's Nest)","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"96","Type":"NODE","ID":"N-045","Name":"Gabi Chappel","City":"Brooklyn (Social Media)","State":"NY","Lat":"40.7128","Lng":"-74.0060","Emoji":"👩🏻‍🍳","Cuisine":"Social Media Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"97","Type":"NODE","ID":"P-034","Name":"Isidore","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍽️","Cuisine":"Texas Steakhouse","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.5,"Reviews":220,"MapLink":"https://maps.app.goo.gl/Isidore"},
        {"Record_ID":"98","Type":"NODE","ID":"N-048","Name":"Danny Parada","City":"San Antonio (Isidore)","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"99","Type":"NODE","ID":"P-035","Name":"Nicosi (Dessert Bar)","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍰","Cuisine":"Dessert Bar","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.6,"Reviews":190,"MapLink":"https://maps.app.goo.gl/Nicosi"},
        {"Record_ID":"100","Type":"NODE","ID":"N-049","Name":"Tavel Bristol-Joseph","City":"San Antonio (Nicosi)","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"👨🏿‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"101","Type":"NODE","ID":"P-040","Name":"The Diplomat","City":"Milwaukee","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"🍽️","Cuisine":"American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.4,"Reviews":350,"MapLink":"https://maps.app.goo.gl/Diplomat"},
        {"Record_ID":"102","Type":"NODE","ID":"N-055","Name":"Dane Baldwin","City":"Milwaukee (The Diplomat)","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"103","Type":"NODE","ID":"P-041","Name":"EsterEv","City":"Milwaukee","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"🍽️","Cuisine":"Modern American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.5,"Reviews":120,"MapLink":"https://maps.app.goo.gl/EsterEv"},
        {"Record_ID":"104","Type":"NODE","ID":"N-056","Name":"Dan Jacobs","City":"Milwaukee (EsterEv)","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"105","Type":"NODE","ID":"P-042","Name":"Myriel","City":"St. Paul","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"🍽️","Cuisine":"Scandinavian","Flags":"🇸🇪","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.6,"Reviews":180,"MapLink":"https://maps.app.goo.gl/Myriel"},
        {"Record_ID":"106","Type":"NODE","ID":"N-057","Name":"Karyn Tomlinson","City":"St. Paul (Myriel)","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"107","Type":"NODE","ID":"P-043","Name":"Block 16","City":"Omaha","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"🍽️","Cuisine":"Farm-to-Table","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.7,"Reviews":410,"MapLink":"https://maps.app.goo.gl/Block16"},
        {"Record_ID":"108","Type":"NODE","ID":"N-058","Name":"Paul Urban","City":"Omaha (Block 16)","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"109","Type":"NODE","ID":"P-044","Name":"Yoshitomo","City":"Omaha","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"🍣","Cuisine":"Sushi/Omakase","Flags":"🇯🇵","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.8,"Reviews":250,"MapLink":"https://maps.app.goo.gl/Yoshitomo"},
        {"Record_ID":"110","Type":"NODE","ID":"N-059","Name":"David Utterback","City":"Omaha (Yoshitomo)","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"111","Type":"NODE","ID":"P-046","Name":"Larder Delicatessen","City":"Cleveland","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"🍽️","Cuisine":"Deli/American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.4,"Reviews":380,"MapLink":"https://maps.app.goo.gl/Larder"},
        {"Record_ID":"112","Type":"NODE","ID":"N-061","Name":"Allie La Valle-Umansky","City":"Cleveland (Larder)","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"113","Type":"NODE","ID":"N-062","Name":"Chris Lockhart","City":"Bozeman (Blackbird)","State":"MT","Lat":"45.6811","Lng":"-111.0494","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"114","Type":"NODE","ID":"P-047","Name":"Khâluna","City":"Minneapolis","State":"MN","Lat":"44.9778","Lng":"-93.2650","Emoji":"🍽️","Cuisine":"Laotian","Flags":"🇱🇦","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.5,"Reviews":300,"MapLink":"https://maps.app.goo.gl/Khaluna"},
        {"Record_ID":"115","Type":"NODE","ID":"N-063","Name":"Ann Ahmed","City":"Minneapolis (Khâluna)","State":"MN","Lat":"44.9778","Lng":"-93.2650","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"116","Type":"NODE","ID":"P-048","Name":"Union Hmong Kitchen","City":"Minneapolis","State":"MN","Lat":"44.9778","Lng":"-93.2650","Emoji":"🍽️","Cuisine":"Hmong","Flags":"🇱🇦","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.4,"Reviews":270,"MapLink":"https://maps.app.goo.gl/UnionHmong"},
        {"Record_ID":"117","Type":"NODE","ID":"N-064","Name":"Yia Vang","City":"Minneapolis (Union Hmong)","State":"MN","Lat":"44.9778","Lng":"-93.2650","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"118","Type":"NODE","ID":"P-049","Name":"Parachute","City":"Chicago","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"🍽️","Cuisine":"Korean-American","Flags":"🇺🇸🇰🇷","Role/Primary":"Place","Year":"NA", "Price":"$$$$","Rating":4.7,"Reviews":490,"MapLink":"https://maps.app.goo.gl/Parachute"},
        {"Record_ID":"119","Type":"NODE","ID":"N-065","Name":"Beverly Kim","City":"Chicago (Parachute)","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"120","Type":"NODE","ID":"P-050","Name":"HaiSous","City":"Chicago","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"🍽️","Cuisine":"Vietnamese","Flags":"🇻🇳","Role/Primary":"Place","Year":"NA", "Price":"$$$","Rating":4.6,"Reviews":520,"MapLink":"https://maps.app.goo.gl/HaiSous"},
        {"Record_ID":"121","Type":"NODE","ID":"N-066","Name":"Thai Dang","City":"Chicago (HaiSous)","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"},
        {"Record_ID":"122","Type":"NODE","ID":"P-051","Name":"Little Goat Diner","City":"Chicago","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"🍽️","Cuisine":"Diner/Fusion","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA", "Price":"$$","Rating":4.3,"Reviews":1200,"MapLink":"https://maps.app.goo.gl/LittleGoat"},
        {"Record_ID":"123","Type":"NODE","ID":"N-067","Name":"Stephanie Izard","City":"Chicago (Little Goat)","State":"IL","Lat":"41.8781","Lng":"-87.6298","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA", "Price":"NA","Rating":null,"Reviews":null,"MapLink":"NA"}
    ],
    "links": [
        {"Record_ID":"13","Type":"EDGE","Source":"P-014","Target":"N-013","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"14","Type":"EDGE","Source":"P-015","Target":"N-014","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"15","Type":"EDGE","Source":"P-016","Target":"N-015","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"16","Type":"EDGE","Source":"P-017","Target":"N-016","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"17","Type":"EDGE","Source":"P-018","Target":"N-017","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"18","Type":"EDGE","Source":"P-019","Target":"N-018","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"19","Type":"EDGE","Source":"P-020","Target":"N-019","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"20","Type":"EDGE","Source":"P-021","Target":"N-020","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"21","Type":"EDGE","Source":"P-022","Target":"N-021","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"22","Type":"EDGE","Source":"P-023","Target":"N-022","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"23","Type":"EDGE","Source":"P-024","Target":"N-023","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"24","Type":"EDGE","Source":"P-025","Target":"N-024","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"25","Type":"EDGE","Source":"P-026","Target":"N-025","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"26","Type":"EDGE","Source":"P-027","Target":"N-026","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"27","Type":"EDGE","Source":"P-028","Target":"N-027","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"28","Type":"EDGE","Source":"N-028","Target":"A-026","Relationship":"HAS_AWARD_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"29","Type":"EDGE","Source":"N-029","Target":"A-006","Relationship":"WON_AWARD_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"30","Type":"EDGE","Source":"N-031","Target":"A-013","Relationship":"COMPETED_ON_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"31","Type":"EDGE","Source":"N-032","Target":"A-014","Relationship":"COMPETED_ON_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"32","Type":"EDGE","Source":"N-034","Target":"A-006","Relationship":"WON_AWARD_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"33","Type":"EDGE","Source":"N-041","Target":"A-021","Relationship":"COMPETED_ON_2018","Flags":"NA","Year":"NA"},
        {"Record_ID":"34","Type":"EDGE","Source":"N-044","Target":"A-013","Relationship":"COMPETED_ON_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"35","Type":"EDGE","Source":"N-045","Target":"A-006","Relationship":"COMPETED_ON_2024","Flags":"NA","Year":"NA"},
        {"Record_ID":"36","Type":"EDGE","Source":"N-048","Target":"P-034","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"37","Type":"EDGE","Source":"N-049","Target":"P-035","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"38","Type":"EDGE","Source":"N-055","Target":"P-040","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"39","Type":"EDGE","Source":"N-056","Target":"P-041","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"40","Type":"EDGE","Source":"N-057","Target":"P-042","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"41","Type":"EDGE","Source":"N-058","Target":"P-043","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"42","Type":"EDGE","Source":"N-059","Target":"P-044","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"43","Type":"EDGE","Source":"N-061","Target":"P-046","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"44","Type":"EDGE","Source":"N-062","Target":"P-019","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"45","Type":"EDGE","Source":"N-063","Target":"P-047","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"46","Type":"EDGE","Source":"N-064","Target":"P-048","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"47","Type":"EDGE","Source":"N-065","Target":"P-049","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"48","Type":"EDGE","Source":"N-066","Target":"P-050","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"49","Type":"EDGE","Source":"N-067","Target":"P-051","Relationship":"CURRENT_HEAD_CHEF_AT","Flags":"NA","Year":"NA"},
        {"Record_ID":"50","Type":"EDGE","Source":"P-017","Target":"A-026","Relationship":"MICHELIN_STAR_AWARDED_TO","Flags":"NA","Year":"NA"},
        {"Record_ID":"51","Type":"EDGE","Source":"P-034","Target":"A-026","Relationship":"MICHELIN_STAR_AWARDED_TO","Flags":"NA","Year":"NA"},
        {"Record_ID":"52","Type":"EDGE","Source":"P-035","Target":"A-026","Relationship":"MICHELIN_STAR_AWARDED_TO","Flags":"NA","Year":"NA"},
        {"Record_ID":"53","Type":"EDGE","Source":"N-013","Target":"A-003","Relationship":"NOMINATED_FOR_AWARD_2022","Flags":"NA","Year":"NA"},
        {"Record_ID":"54","Type":"EDGE","Source":"N-014","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"55","Type":"EDGE","Source":"N-015","Target":"A-005","Relationship":"NOMINATED_FOR_AWARD_2019","Flags":"NA","Year":"NA"},
        {"Record_ID":"56","Type":"EDGE","Source":"N-016","Target":"A-016","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"57","Type":"EDGE","Source":"N-017","Target":"A-017","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"58","Type":"EDGE","Source":"N-018","Target":"A-019","Relationship":"NOMINATED_FOR_AWARD_2022","Flags":"NA","Year":"NA"},
        {"Record_ID":"59","Type":"EDGE","Source":"N-020","Target":"A-020","Relationship":"WON_AWARD_2022","Flags":"NA","Year":"NA"},
        {"Record_ID":"60","Type":"EDGE","Source":"P-022","Target":"A-018","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"61","Type":"EDGE","Source":"N-022","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"62","Type":"EDGE","Source":"N-024","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"63","Type":"EDGE","Source":"N-025","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"64","Type":"EDGE","Source":"N-027","Target":"A-003","Relationship":"NOMINATED_FOR_AWARD_2022","Flags":"NA","Year":"NA"},
        {"Record_ID":"65","Type":"EDGE","Source":"P-029","Target":"A-008","Relationship":"NOMINATED_FOR_AWARD_2019","Flags":"NA","Year":"NA"},
        {"Record_ID":"66","Type":"EDGE","Source":"N-055","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"67","Type":"EDGE","Source":"N-056","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"68","Type":"EDGE","Source":"N-057","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"69","Type":"EDGE","Source":"N-058","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"70","Type":"EDGE","Source":"N-059","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"71","Type":"EDGE","Source":"N-061","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"72","Type":"EDGE","Source":"N-063","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"73","Type":"EDGE","Source":"N-064","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"74","Type":"EDGE","Source":"N-065","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"75","Type":"EDGE","Source":"N-066","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"},
        {"Record_ID":"76","Type":"EDGE","Source":"N-067","Target":"A-004","Relationship":"NOMINATED_FOR_AWARD_2023","Flags":"NA","Year":"NA"}
    ]
};

// --- Global Variables ---
const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select("#network-map")
    .attr("width", width)
    .attr("height", height);

// Create a group for the main content that will be zoomed and panned
const g = svg.append("g");


// --- Zoom and Pan Setup (NEW: Constraints Added) ---
// Define the zoom and pan limits (based on a reasonable extent for the US map)
const zoom = d3.zoom()
    .scaleExtent([0.5, 8]) // Zoom limits: 0.5x minimum, 8x maximum
    // Panning limits: Allow panning slightly outside the initial view (e.g., +/- 100 pixels)
    .translateExtent([
        [-width * 0.5, -height * 0.5], 
        [width * 1.5, height * 1.5]
    ])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

// --- Helper Functions ---

function getAllRelationshipTypes(data) {
    const relationships = new Set();
    data.links.forEach(link => {
        relationships.add(link.Relationship);
    });
    return Array.from(relationships).sort();
}

function getNodeById(id) {
    return graphData.nodes.find(node => node.ID === id);
}

function parseRelationship(relationship) {
    // This function provides the clean, friendly label for the link
    
    if (relationship.startsWith('CURRENT_HEAD_CHEF')) {
        return { label: 'Current Chef 👨🏻‍🍳', isChef: true };
    } else if (relationship.includes('MICHELIN_STAR')) {
        return { label: 'Awarded to 🍽️', isAward: true, isPlace: true };
    } else if (relationship.startsWith('NOMINATED_FOR_AWARD')) {
        return { label: 'Nominated for 🏆', isAward: true };
    } else if (relationship.startsWith('WON_AWARD')) {
        return { label: 'Winner of 🏆', isAward: true };
    } else if (relationship.startsWith('COMPETED_ON')) {
        return { label: 'Competitor on 📺', isCompetition: true };
    }
    
    // Fallback for unexpected relationships
    return { label: relationship.replace(/_/g, ' '), isUnknown: true };
}


function filterGraph(relationshipType) {
    let filteredData;

    if (relationshipType === "ALL") {
        // Show all nodes and links
        filteredData = graphData;
    } else {
        // Filter links to only include the selected relationship
        const filteredLinks = graphData.links.filter(link => 
            link.Relationship === relationshipType
        );

        // Identify all nodes connected to the filtered links
        const connectedNodeIds = new Set();
        filteredLinks.forEach(link => {
            connectedNodeIds.add(link.Source);
            connectedNodeIds.add(link.Target);
        });

        // Filter nodes to include only the connected ones
        const filteredNodes = graphData.nodes.filter(node => 
            connectedNodeIds.has(node.ID)
        );

        filteredData = {
            nodes: filteredNodes,
            links: filteredLinks
        };
    }
    
    // Redraw the graph with the filtered data
    drawGraph(filteredData);
    
    // Clear the detail panel on filter change
    d3.select("#detail-panel").html('<h2 id="detail-title">Select a Node to View Details</h2>');
}

// --- Main Visualization Function ---
function drawGraph(filteredData) {
    // Clear the previous drawing
    g.selectAll("*").remove();

    // D3 force simulation initialization
    const simulation = d3.forceSimulation(filteredData.nodes)
        .force("link", d3.forceLink(filteredData.links).id(d => d.ID).distance(50))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    // --- Links ---
    const link = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredData.links)
        .enter().append("line")
        .attr("class", "link");

    // --- Nodes ---
    const node = g.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(filteredData.nodes)
        .enter().append("g")
        .attr("class", d => `node ${d['Role/Primary']}`) // Add Role/Primary as CSS class
        .on("click", (event, d) => {
            // Highlight the clicked node and its immediate links
            g.selectAll(".node").classed("active", false);
            d3.select(event.currentTarget).classed("active", true);
            
            link.classed("highlighted", l => l.Source.ID === d.ID || l.Target.ID === d.ID);

            // Populate the detail panel
            d3.select("#detail-panel").html(generateDetailPanelContent(d));
        });

    // Node Circles
    node.append("circle")
        .attr("r", 15)
        .attr("fill", d => {
            if (d['Role/Primary'] === 'Place') return '#4CAF50';
            if (d['Role/Primary'] === 'Person') return '#2196F3';
            // Award and Competition nodes are hidden via CSS, so this color is irrelevant, but good practice.
            if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') return 'transparent'; 
            return '#FF9800';
        });

    // Node Labels (Emojis)
    node.append("text")
        .attr("dy", 5)
        .text(d => d.Emoji);
        
    // Node Labels (Name/City) - Added a small label for context
    node.append("text")
        .attr("dy", 25) 
        .attr("font-size", "10px")
        .text(d => {
             // Only show the name label for visible nodes (Places/People)
             if (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person') {
                return d.Name;
             }
             return "";
        });


    // Update positions on tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
    });
}


// --- Detail Panel Generation (Cleaned up) ---
function generateDetailPanelContent(d) {
    let content = `
        <h2 class="detail-name">${d.Emoji} ${d.Name}</h2>
    `;
    
    // --- Standard Content (For Place and Person Nodes) ---
    if (d['Role/Primary'] === 'Place' || d['Role/Primary'] === 'Person') {
        content += `
            <p><strong>Type:</strong> ${d['Role/Primary']}</p>
            <p><strong>Cuisine/Role:</strong> ${d.Cuisine || 'N/A'} ${d.Flags}</p>
            <p><strong>Location:</strong> ${d.City}, ${d.State || 'N/A'}</p>
            ${d.Price && d.Price !== 'NA' ? `<p><strong>Price Range:</strong> ${d.Price}</p>` : ''}
            ${d.Rating ? `<p><strong>Rating:</strong> ${d.Rating} (${d.Reviews || 0} reviews)</p>` : ''}
            ${d.MapLink && d.MapLink !== 'NA' ? `<p class="detail-link"><a href="${d.MapLink}" target="_blank">View on Google Maps 🗺️</a></p>` : ''}
        `;
    }
    
    // --- Award/Competition Content (Simplified and cleaned) ---
    if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
        content += `
            <p><strong>Type:</strong> ${d['Role/Primary']}</p>
            ${d.Year ? `<p><strong>Year:</strong> ${d.Year}</p>` : ''}
        `;
    }

    // --- Connections Section ---
    const connections = graphData.links.filter(link => 
        link.Source === d.ID || link.Target === d.ID
    );

    if (connections.length > 0) {
        content += `<h3 class="detail-connections-header">Connections:</h3><ul class="detail-connections-list">`;
        
        connections.forEach(link => {
            let connectedNodeId = (link.Source === d.ID) ? link.Target : link.Source;
            let connectedNode = getNodeById(connectedNodeId);
            
            if (connectedNode) {
                const relationshipDetails = parseRelationship(link.Relationship);

                let displayLabel;
                let displayTargetName = connectedNode.Name;
                let displayEmoji = connectedNode.Emoji;

                if (d['Role/Primary'] === 'Award' || d['Role/Primary'] === 'Competition') {
                    // Current node is an Award/Competition: Show WHO/WHAT received it.
                    // Output: [Emoji] [Name] (e.g., 🍽️ Mixtli)
                    // Skip if the connected node is an Award too (unlikely with clean data)
                    if (connectedNode['Role/Primary'] === 'Award' || connectedNode['Role/Primary'] === 'Competition') return;
                    
                    displayLabel = ''; 
                    listItemContent = `${displayEmoji} ${displayTargetName}`;

                } else if (link.Source === d.ID) {
                    // Current node (d) is the Source (e.g., Chef -> Award)
                    displayLabel = relationshipDetails.label;
                    listItemContent = `<strong>${displayLabel}</strong> - ${displayEmoji} ${displayTargetName}`;
                } else {
                    // Current node (d) is the Target (e.g., Restaurant <- Chef)
                    // Reverse the label logic for inbound links
                    if (relationshipDetails.isChef) {
                        displayLabel = 'Features Chef 👨🏻‍🍳';
                    } else if (relationshipDetails.isAward) {
                        displayLabel = 'Won Award 🏆';
                    } else if (relationshipDetails.isCompetition) {
                        displayLabel = 'Participated in 📺';
                    } else {
                         displayLabel = 'Connected to'; // Fallback
                    }
                    listItemContent = `<strong>${displayLabel}</strong> - ${displayEmoji} ${displayTargetName}`;
                }

                content += `<li>${listItemContent}</li>`;
            }
        });
        content += `</ul>`;
    }

    return content;
}

// --- Initialization & Event Binding (Filter Fix Implemented) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate the filter dropdown
    const relationships = getAllRelationshipTypes(graphData);
    const filterSelect = d3.select("#relationship-filter");
    
    relationships.forEach(rel => {
        // Use the friendly name for the label, but the raw relationship for the value
        const friendlyLabel = parseRelationship(rel).label;
        filterSelect.append("option")
            .attr("value", rel)
            .text(friendlyLabel);
    });

    // 2. Add the event listener to trigger the filter logic (THE FIX)
    filterSelect.on("change", function() {
        const selectedRelationship = this.value;
        filterGraph(selectedRelationship);
    });

    // 3. Draw the initial graph
    drawGraph(graphData);
});
