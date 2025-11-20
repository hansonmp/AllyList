// --- Data Injection (Bypasses CSV Reading Issues) ---
const graphData = {
    "nodes": [
        {"Record_ID":"43","Type":"NODE","ID":"P-014","Name":"Kin","City":"Boise","State":"ID","Lat":"43.6150","Lng":"-116.2023","Emoji":"🍽️","Cuisine":"Modern American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"44","Type":"NODE","ID":"N-013","Name":"Kris Komori","City":"Boise (Kin)","State":"ID","Lat":"43.6150","Lng":"-116.2023","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"45","Type":"NODE","ID":"P-015","Name":"L'Etoile","City":"Madison","State":"WI","Lat":"43.0731","Lng":"-89.3837","Emoji":"🍽️","Cuisine":"French","Flags":"🇫🇷","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"46","Type":"NODE","ID":"N-014","Name":"Tory Miller","City":"Madison (L'Etoile)","State":"WI","Lat":"43.0731","Lng":"-89.3837","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"47","Type":"NODE","ID":"P-016","Name":"Ardent","City":"Milwaukee","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"🍽️","Cuisine":"Tasting Menu","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"48","Type":"NODE","ID":"N-015","Name":"Justin Carlisle","City":"Milwaukee (Ardent)","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"49","Type":"NODE","ID":"P-017","Name":"Mixtli","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍽️","Cuisine":"Mexican (Rotating)","Flags":"🇲🇽","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"50","Type":"NODE","ID":"N-016","Name":"Rico Torres","City":"San Antonio (Mixtli)","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"51","Type":"NODE","ID":"P-018","Name":"The Southern","City":"Augusta","State":"GA","Lat":"33.4735","Lng":"-82.0105","Emoji":"🍽️","Cuisine":"Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"52","Type":"NODE","ID":"N-017","Name":"Brandon Rushing","City":"Augusta (The Southern)","State":"GA","Lat":"33.4735","Lng":"-82.0105","Emoji":"👨🏿‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"53","Type":"NODE","ID":"P-019","Name":"Blackbird Kitchen","City":"Bozeman","State":"MT","Lat":"45.6811","Lng":"-111.0494","Emoji":"🍽️","Cuisine":"Italian","Flags":"🇮🇹","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"54","Type":"NODE","ID":"N-018","Name":"Robert Wallace","City":"Bozeman (Blackbird)","State":"MT","Lat":"45.6811","Lng":"-111.0494","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"55","Type":"NODE","ID":"P-020","Name":"Preserved Restaurant","City":"St Augustine","State":"FL","Lat":"29.8940","Lng":"-81.3110","Emoji":"🍽️","Cuisine":"Coastal Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"56","Type":"NODE","ID":"N-019","Name":"Jeffrey Harding","City":"St Augustine (Preserved)","State":"FL","Lat":"29.8940","Lng":"-81.3110","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"57","Type":"NODE","ID":"P-021","Name":"FIG","City":"Charleston","State":"NC","Lat":"32.7885","Lng":"-79.9328","Emoji":"🍽️","Cuisine":"Seasonal American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"58","Type":"NODE","ID":"N-020","Name":"Jason Stanhope","City":"Charleston (FIG)","State":"NC","Lat":"32.7885","Lng":"-79.9328","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"59","Type":"NODE","ID":"P-022","Name":"Vicia","City":"St Louis","State":"MO","Lat":"38.6391","Lng":"-90.2312","Emoji":"🍽️","Cuisine":"Vegetable-Forward","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"60","Type":"NODE","ID":"N-021","Name":"Michael Gallina","City":"St Louis (Vicia)","State":"MO","Lat":"38.6391","Lng":"-90.2312","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"61","Type":"NODE","ID":"P-023","Name":"Au Courant Regional","City":"Omaha","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"🍽️","Cuisine":"New American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"62","Type":"NODE","ID":"N-022","Name":"Chris Hughes","City":"Omaha (Au Courant)","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"63","Type":"NODE","ID":"P-024","Name":"Perch","City":"Gulf Shores","State":"AL","Lat":"30.2520","Lng":"-87.7001","Emoji":"🍽️","Cuisine":"Seafood","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"64","Type":"NODE","ID":"N-023","Name":"Wesley True","City":"Gulf Shores (Perch)","State":"AL","Lat":"30.2520","Lng":"-87.7001","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"65","Type":"NODE","ID":"P-025","Name":"Young Joni","City":"St Paul","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"🍽️","Cuisine":"Pizza/Asian Fusion","Flags":"🇺🇸🇰🇷","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"66","Type":"NODE","ID":"N-024","Name":"Ann Kim","City":"St Paul (Young Joni)","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"67","Type":"NODE","ID":"P-026","Name":"The Plum Cafe","City":"Cleveland","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"🍽️","Cuisine":"Seasonal American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"68","Type":"NODE","ID":"N-025","Name":"Brett Sawyer","City":"Cleveland (The Plum)","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"69","Type":"NODE","ID":"P-027","Name":"Capital Bar","City":"Little Rock","State":"AR","Lat":"34.7465","Lng":"-92.2896","Emoji":"🍽️","Cuisine":"Fine Dining","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"70","Type":"NODE","ID":"N-026","Name":"Matt Bell","City":"Little Rock (Capital Bar)","State":"AR","Lat":"34.7465","Lng":"-92.2896","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"71","Type":"NODE","ID":"P-028","Name":"Crow's Nest","City":"Anchorage","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"🍽️","Cuisine":"Pacific Northwest","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"72","Type":"NODE","ID":"N-027","Name":"Danny Peñaloza","City":"Anchorage (Crow's Nest)","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"73","Type":"NODE","ID":"N-028","Name":"Erik Anderson","City":"Multiple (The Grey)","State":"NA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"74","Type":"NODE","ID":"A-003","Name":"Best Chef: Northwest Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022","Source":"JBF"},
        {"Record_ID":"75","Type":"NODE","ID":"A-004","Name":"Best Chef: Midwest Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023","Source":"JBF"},
        {"Record_ID":"76","Type":"NODE","ID":"A-005","Name":"Outstanding Chef Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2019","Source":"JBF"},
        {"Record_ID":"77","Type":"NODE","ID":"A-006","Name":"Top Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2024","Source":"Bravo"},
        {"Record_ID":"78","Type":"NODE","ID":"A-008","Name":"Best New Restaurant Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2019","Source":"JBF"},
        {"Record_ID":"79","Type":"NODE","ID":"A-013","Name":"Next Level Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2024","Source":"Fox"},
        {"Record_ID":"80","Type":"NODE","ID":"A-014","Name":"MasterChef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2024","Source":"Fox"},
        {"Record_ID":"81","Type":"NODE","ID":"A-016","Name":"Best Chef: South Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023","Source":"JBF"},
        {"Record_ID":"82","Type":"NODE","ID":"A-017","Name":"Outstanding Chef Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023","Source":"JBF"},
        {"Record_ID":"83","Type":"NODE","ID":"A-018","Name":"Best New Restaurant Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2023","Source":"JBF"},
        {"Record_ID":"84","Type":"NODE","ID":"A-019","Name":"Best Chef: Mountain Nominee","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022","Source":"JBF"},
        {"Record_ID":"85","Type":"NODE","ID":"A-020","Name":"Food & Wine Best New Chef","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2022","Source":"F&W Mag"},
        {"Record_ID":"86","Type":"NODE","ID":"A-021","Name":"The Final Table","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2018","Source":"Netflix"},
        {"Record_ID":"87","Type":"NODE","ID":"A-026","Name":"One MICHELIN Star","City":"NA","State":"NA","Lat":"NA","Lng":"NA","Emoji":"🏆","Cuisine":"NA","Flags":"NA","Role/Primary":"Award","Year":"2024","Source":"Michelin Guide"},
        {"Record_ID":"88","Type":"NODE","ID":"P-029","Name":"The Grey","City":"Savannah","State":"GA","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Southern","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"89","Type":"NODE","ID":"P-030","Name":"Pēppē","City":"NYC","State":"NY","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Modern Fine Dining","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"90","Type":"NODE","ID":"N-029","Name":"Nini Nguyen","City":"NYC (Pēppē)","State":"NY","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"91","Type":"NODE","ID":"N-031","Name":"Joe Sasto","City":"SF/LA (Nomad/La Tavola)","State":"CA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"92","Type":"NODE","ID":"N-032","Name":"Kelsey Clark","City":"Dothan (The Dothan Nurseries)","State":"AL","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"93","Type":"NODE","ID":"N-034","Name":"Buddha Lo","City":"NYC (Pēppē)","State":"NY","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇦🇺","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"94","Type":"NODE","ID":"N-041","Name":"Timothy Hollingsworth","City":"LA (Otium)","State":"CA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"95","Type":"NODE","ID":"N-044","Name":"Michael Leonard","City":"Multiple (Crow's Nest)","State":"AK","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"96","Type":"NODE","ID":"N-045","Name":"Gabi Chappel","City":"Brooklyn (Social Media)","State":"NY","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Social Media Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"97","Type":"NODE","ID":"P-034","Name":"Isidore","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍽️","Cuisine":"Texas Steakhouse","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"98","Type":"NODE","ID":"N-048","Name":"Danny Parada","City":"San Antonio (Isidore)","State":"TX","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"99","Type":"NODE","ID":"P-035","Name":"Nicosi","City":"San Antonio","State":"TX","Lat":"29.5310","Lng":"-98.4870","Emoji":"🍰","Cuisine":"Dessert Bar","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"100","Type":"NODE","ID":"N-049","Name":"Tavel Bristol-Joseph","City":"San Antonio (Nicosi)","State":"TX","Lat":"NA","Lng":"NA","Emoji":"👨🏿‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"101","Type":"NODE","ID":"P-040","Name":"The Diplomat","City":"Milwaukee","State":"WI","Lat":"43.0640","Lng":"-87.9170","Emoji":"🍽️","Cuisine":"American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"102","Type":"NODE","ID":"N-055","Name":"Dane Baldwin","City":"Milwaukee (The Diplomat)","State":"WI","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"103","Type":"NODE","ID":"P-041","Name":"EsterEv","City":"Milwaukee","State":"WI","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Modern American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"104","Type":"NODE","ID":"N-056","Name":"Dan Jacobs","City":"Milwaukee (EsterEv)","State":"WI","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"105","Type":"NODE","ID":"P-042","Name":"Myriel","City":"St. Paul","State":"MN","Lat":"44.9780","Lng":"-93.2530","Emoji":"🍽️","Cuisine":"Scandinavian","Flags":"🇸🇪","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"106","Type":"NODE","ID":"N-057","Name":"Karyn Tomlinson","City":"St. Paul (Myriel)","State":"MN","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"107","Type":"NODE","ID":"P-043","Name":"Block 16","City":"Omaha","State":"NE","Lat":"41.2587","Lng":"-96.0592","Emoji":"🍽️","Cuisine":"Farm-to-Table","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"108","Type":"NODE","ID":"N-058","Name":"Paul Urban","City":"Omaha (Block 16)","State":"NE","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"109","Type":"NODE","ID":"P-044","Name":"Yoshitomo","City":"Omaha","State":"NE","Lat":"NA","Lng":"NA","Emoji":"🍣","Cuisine":"Sushi/Omakase","Flags":"🇯🇵","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"110","Type":"NODE","ID":"N-059","Name":"David Utterback","City":"Omaha (Yoshitomo)","State":"NE","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"111","Type":"NODE","ID":"P-046","Name":"Larder Delicatessen","City":"Cleveland","State":"OH","Lat":"41.5034","Lng":"-81.6944","Emoji":"🍽️","Cuisine":"Deli/American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"112","Type":"NODE","ID":"N-061","Name":"Allie La Valle-Umansky","City":"Cleveland (Larder)","State":"OH","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"113","Type":"NODE","ID":"N-062","Name":"Chris Lockhart","City":"Bozeman (Blackbird)","State":"MT","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"114","Type":"NODE","ID":"P-047","Name":"Khâluna","City":"Minneapolis","State":"MN","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Laotian","Flags":"🇱🇦","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"115","Type":"NODE","ID":"N-063","Name":"Ann Ahmed","City":"Minneapolis (Khâluna)","State":"MN","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"116","Type":"NODE","ID":"P-048","Name":"Union Hmong Kitchen","City":"Minneapolis","State":"MN","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Hmong","Flags":"🇱🇦","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"117","Type":"NODE","ID":"N-064","Name":"Yia Vang","City":"Minneapolis (Union Hmong)","State":"MN","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"118","Type":"NODE","ID":"P-049","Name":"Parachute","City":"Chicago","State":"IL","Lat":"41.9360","Lng":"-87.7020","Emoji":"🍽️","Cuisine":"Korean-American","Flags":"🇺🇸🇰🇷","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"119","Type":"NODE","ID":"N-065","Name":"Beverly Kim","City":"Chicago (Parachute)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"120","Type":"NODE","ID":"P-050","Name":"HaiSous","City":"Chicago","State":"IL","Lat":"41.8540","Lng":"-87.6680","Emoji":"🍽️","Cuisine":"Vietnamese","Flags":"🇻🇳","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"121","Type":"NODE","ID":"N-066","Name":"Thai Dang","City":"Chicago (HaiSous)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"122","Type":"NODE","ID":"P-051","Name":"Little Goat Diner","City":"Chicago","State":"IL","Lat":"41.8845","Lng":"-87.6430","Emoji":"🍽️","Cuisine":"Diner/Fusion","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"123","Type":"NODE","ID":"N-067","Name":"Stephanie Izard","City":"Chicago (Girl & The Goat)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"124","Type":"NODE","ID":"P-052","Name":"The Anchorage","City":"Anchorage","State":"AK","Lat":"61.2181","Lng":"-149.9003","Emoji":"🍽️","Cuisine":"Fine Dining","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"125","Type":"NODE","ID":"N-068","Name":"Robert DeGeorge","City":"Anchorage (The Anchorage)","State":"AK","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Executive Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"126","Type":"NODE","ID":"P-055","Name":"Hai Hai","City":"Minneapolis","State":"MN","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Vietnamese","Flags":"🇻🇳","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"127","Type":"NODE","ID":"N-071","Name":"Christina Nguyen","City":"Minneapolis (Hai Hai)","State":"MN","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"128","Type":"NODE","ID":"P-056","Name":"Rootstalk","City":"Breckenridge","State":"CO","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"New American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"129","Type":"NODE","ID":"N-072","Name":"Matt Vawter","City":"Breckenridge (Rootstalk)","State":"CO","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef/Owner","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"130","Type":"NODE","ID":"P-057","Name":"Lula Cafe","City":"Chicago","State":"IL","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"131","Type":"NODE","ID":"P-058","Name":"Mirra","City":"Chicago","State":"IL","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Modern American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"132","Type":"NODE","ID":"N-074","Name":"Sean Pharr","City":"Madison (Mint Mark)","State":"WI","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"133","Type":"NODE","ID":"N-075","Name":"Michael Corvino","City":"Kansas City (Corvino)","State":"MO","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"134","Type":"NODE","ID":"N-077","Name":"Jason Vincent","City":"Chicago (Giant)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"135","Type":"NODE","ID":"N-035","Name":"Shelly Flash","City":"KC (Flash's Kitchen)","State":"MO","Lat":"NA","Lng":"NA","Emoji":"👩🏿‍🍳","Cuisine":"Chef","Flags":"🇯🇲","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"136","Type":"NODE","ID":"N-042","Name":"Fred Chang","City":"LA (Dessert)","State":"CA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Pastry Chef","Flags":"🇹🇼","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"137","Type":"NODE","ID":"N-036","Name":"Wuta Onda","City":"Louisville (Noma)","State":"KY","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"138","Type":"NODE","ID":"P-059","Name":"Mint Mark","City":"Madison","State":"WI","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Contemporary American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"139","Type":"NODE","ID":"P-060","Name":"Giant","City":"Chicago","State":"IL","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"New American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"140","Type":"NODE","ID":"N-050","Name":"Sam Fore","City":"Augusta (Tala)","State":"GA","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"141","Type":"NODE","ID":"N-052","Name":"Michael O'Malley","City":"Des Moines (Baru 66)","State":"IA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"142","Type":"NODE","ID":"P-064","Name":"Obelix","City":"Chicago","State":"IL","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"French","Flags":"🇫🇷","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"143","Type":"NODE","ID":"N-082","Name":"Oliver Poilevey","City":"Chicago (Obelix)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"144","Type":"NODE","ID":"N-083","Name":"Genie Kwon","City":"Chicago (Kasama)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Pastry Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"145","Type":"NODE","ID":"P-066","Name":"Coiled","City":"Boise","State":"ID","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"New American","Flags":"🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"146","Type":"NODE","ID":"N-084","Name":"Ellie Youngblood","City":"Boise (Coiled)","State":"ID","Lat":"NA","Lng":"NA","Emoji":"👩🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"147","Type":"NODE","ID":"P-067","Name":"Kasama","City":"Chicago","State":"IL","Lat":"NA","Lng":"NA","Emoji":"🍽️","Cuisine":"Filipino-American","Flags":"🇵🇭🇺🇸","Role/Primary":"Place","Year":"NA","Source":"NA"},
        {"Record_ID":"148","Type":"NODE","ID":"N-087","Name":"Timothy Flores","City":"Chicago (Kasama)","State":"IL","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"149","Type":"NODE","ID":"N-037","Name":"Dorian Hunter","City":"Atlanta (Personal)","State":"GA","Lat":"NA","Lng":"NA","Emoji":"👩🏿‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"150","Type":"NODE","ID":"N-043","Name":"Dale Talde","City":"NYC (Multiple)","State":"NY","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"},
        {"Record_ID":"151","Type":"NODE","ID":"N-085","Name":"Shota Nakajima","City":"Seattle (Taku)","State":"WA","Lat":"NA","Lng":"NA","Emoji":"👨🏻‍🍳","Cuisine":"Chef","Flags":"🇺🇸","Role/Primary":"Person","Year":"NA","Source":"NA"}
    ],
    "links": [
        {"Record_ID":"74","Type":"EDGE","ID":"E-019","Label":"CURRENT_HEAD_CHEF_AT","City":"Boise","Degree":"1","Start_ID":"P-014","End_ID":"N-013","Relationship_Type":"Employment","Current":"True","Sources":"Eater Boise, JBF Site","Confidence":"NA"},
        {"Record_ID":"75","Type":"EDGE","ID":"E-020","Label":"CURRENT_HEAD_CHEF_AT","City":"Madison","Degree":"1","Start_ID":"P-015","End_ID":"N-014","Relationship_Type":"Employment","Current":"True","Sources":"Madison Mag, L’Etoile Site","Confidence":"NA"},
        {"Record_ID":"76","Type":"EDGE","ID":"E-021","Label":"CURRENT_HEAD_CHEF_AT","City":"Milwaukee","Degree":"1","Start_ID":"P-016","End_ID":"N-015","Relationship_Type":"Employment","Current":"True","Sources":"Ardent Site, Milwaukee Journal","Confidence":"NA"},
        {"Record_ID":"77","Type":"EDGE","ID":"E-022","Label":"CURRENT_HEAD_CHEF_AT","City":"San Antonio","Degree":"1","Start_ID":"P-017","End_ID":"N-016","Relationship_Type":"Employment","Current":"True","Sources":"Texas Monthly, Mixtli Site","Confidence":"NA"},
        {"Record_ID":"78","Type":"EDGE","ID":"E-023","Label":"CURRENT_HEAD_CHEF_AT","City":"Augusta","Degree":"1","Start_ID":"P-018","End_ID":"N-017","Relationship_Type":"Employment","Current":"True","Sources":"Local News, Restaurant Website","Confidence":"NA"},
        {"Record_ID":"79","Type":"EDGE","ID":"E-024","Label":"CURRENT_HEAD_CHEF_AT","City":"Bozeman","Degree":"1","Start_ID":"P-019","End_ID":"N-018","Relationship_Type":"Employment","Current":"True","Sources":"Bozeman Mag, Blackbird Site","Confidence":"NA"},
        {"Record_ID":"80","Type":"EDGE","ID":"E-025","Label":"CURRENT_HEAD_CHEF_AT","City":"St Augustine","Degree":"1","Start_ID":"P-020","End_ID":"N-019","Relationship_Type":"Employment","Current":"True","Sources":"Coastal Mag, Preserved Site","Confidence":"NA"},
        {"Record_ID":"81","Type":"EDGE","ID":"E-026","Label":"CURRENT_HEAD_CHEF_AT","City":"Charleston","Degree":"1","Start_ID":"P-021","End_ID":"N-020","Relationship_Type":"Employment","Current":"True","Sources":"FIG Website, Eater Charleston","Confidence":"NA"},
        {"Record_ID":"82","Type":"EDGE","ID":"E-027","Label":"CURRENT_HEAD_CHEF_AT","City":"St Louis","Degree":"1","Start_ID":"P-022","End_ID":"N-021","Relationship_Type":"Employment","Current":"True","Sources":"Vicia Site, St. Louis Post","Confidence":"NA"},
        {"Record_ID":"83","Type":"EDGE","ID":"E-028","Label":"CURRENT_HEAD_CHEF_AT","City":"Omaha","Degree":"1","Start_ID":"P-023","End_ID":"N-022","Relationship_Type":"Employment","Current":"True","Sources":"Omaha Mag, Au Courant Site","Confidence":"NA"},
        {"Record_ID":"84","Type":"EDGE","ID":"E-029","Label":"CURRENT_HEAD_CHEF_AT","City":"Gulf Shores","Degree":"1","Start_ID":"P-024","End_ID":"N-023","Relationship_Type":"Employment","Current":"True","Sources":"Local PR, Perch Site","Confidence":"NA"},
        {"Record_ID":"85","Type":"EDGE","ID":"E-030","Label":"CURRENT_HEAD_CHEF_AT","City":"St Paul","Degree":"1","Start_ID":"P-025","End_ID":"N-024","Relationship_Type":"Employment","Current":"True","Sources":"Young Joni Site, Star Tribune","Confidence":"NA"},
        {"Record_ID":"86","Type":"EDGE","ID":"E-031","Label":"CURRENT_HEAD_CHEF_AT","City":"Cleveland","Degree":"1","Start_ID":"P-026","End_ID":"N-025","Relationship_Type":"Employment","Current":"True","Sources":"Cleveland Scene, The Plum Site","Confidence":"NA"},
        {"Record_ID":"87","Type":"EDGE","ID":"E-032","Label":"CURRENT_HEAD_CHEF_AT","City":"Little Rock","Degree":"1","Start_ID":"P-027","End_ID":"N-026","Relationship_Type":"Employment","Current":"True","Sources":"Capital Site, Arkansas Times","Confidence":"NA"},
        {"Record_ID":"88","Type":"EDGE","ID":"E-033","Label":"CURRENT_HEAD_CHEF_AT","City":"Anchorage","Degree":"1","Start_ID":"P-028","End_ID":"N-027","Relationship_Type":"Employment","Current":"True","Sources":"Local Guide, Crow's Nest Site","Confidence":"NA"},
        {"Record_ID":"89","Type":"EDGE","ID":"E-034","Label":"TRAINED_UNDER","City":"Milwaukee","Degree":"2","Start_ID":"N-015","End_ID":"N-028","Relationship_Type":"Mentorship","Current":"True","Sources":"Chef Bio, Eater MKE","Confidence":"NA"},
        {"Record_ID":"90","Type":"EDGE","ID":"E-035","Label":"CURRENT_HEAD_CHEF_AT","City":"Savannah","Degree":"3","Start_ID":"P-029","End_ID":"N-028","Relationship_Type":"Employment","Current":"True","Sources":"Food & Wine, Chef Bio","Confidence":"NA"},
        {"Record_ID":"91","Type":"EDGE","ID":"E-037","Label":"CURRENT_HEAD_CHEF_AT","City":"NYC","Degree":"3","Start_ID":"P-030","End_ID":"N-029","Relationship_Type":"Employment","Current":"True","Sources":"Time Out, Group Website","Confidence":"NA"},
        {"Record_ID":"92","Type":"EDGE","ID":"E-042","Label":"AWARDED_FOR_PLACE","City":"Savannah","Degree":"1","Start_ID":"A-018","End_ID":"P-029","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"93","Type":"EDGE","ID":"E-045","Label":"JBF_NOMINEE_AT","City":"Augusta","Degree":"1","Start_ID":"N-017","End_ID":"A-016","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"94","Type":"EDGE","ID":"E-046","Label":"CURRENT_HEAD_CHEF_AT","City":"Augusta","Degree":"2","Start_ID":"P-018","End_ID":"N-017","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"95","Type":"EDGE","ID":"E-053","Label":"TOP_CHEF_COMPETITOR","City":"St Paul","Degree":"2","Start_ID":"N-024","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"Bravo TV","Confidence":"NA"},
        {"Record_ID":"96","Type":"EDGE","ID":"E-054","Label":"NEXT_LEVEL_CHEF_COMPETITOR","City":"Brooklyn","Degree":"1","Start_ID":"N-045","End_ID":"A-013","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"97","Type":"EDGE","ID":"E-056","Label":"MICHELIN_STAR_AWARDED_TO","City":"San Antonio","Degree":"1","Start_ID":"A-026","End_ID":"P-034","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"98","Type":"EDGE","ID":"E-057","Label":"MICHELIN_STAR_AWARDED_TO","City":"San Antonio","Degree":"1","Start_ID":"A-026","End_ID":"P-035","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"99","Type":"EDGE","ID":"E-058","Label":"MICHELIN_STAR_AWARDED_TO","City":"San Antonio","Degree":"1","Start_ID":"A-026","End_ID":"P-017","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"100","Type":"EDGE","ID":"E-059","Label":"CURRENT_HEAD_CHEF_AT","City":"San Antonio","Degree":"2","Start_ID":"P-034","End_ID":"N-048","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"101","Type":"EDGE","ID":"E-060","Label":"PARTNER_AT","City":"San Antonio","Degree":"2","Start_ID":"P-035","End_ID":"N-049","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"102","Type":"EDGE","ID":"E-072","Label":"JBF_WINNER_AT","City":"Milwaukee","Degree":"1","Start_ID":"N-055","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"103","Type":"EDGE","ID":"E-073","Label":"CURRENT_OWNER_AT","City":"Milwaukee","Degree":"1","Start_ID":"P-040","End_ID":"N-055","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"104","Type":"EDGE","ID":"E-074","Label":"JBF_NOMINEE_AT","City":"Milwaukee","Degree":"1","Start_ID":"N-056","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"105","Type":"EDGE","ID":"E-075","Label":"CURRENT_OWNER_AT","City":"Milwaukee","Degree":"1","Start_ID":"P-041","End_ID":"N-056","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"106","Type":"EDGE","ID":"E-076","Label":"JBF_WINNER_AT","City":"St. Paul","Degree":"1","Start_ID":"N-057","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"107","Type":"EDGE","ID":"E-077","Label":"CURRENT_OWNER_AT","City":"St. Paul","Degree":"1","Start_ID":"P-042","End_ID":"N-057","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"108","Type":"EDGE","ID":"E-078","Label":"JBF_NOMINEE_AT","City":"Omaha","Degree":"1","Start_ID":"N-058","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"109","Type":"EDGE","ID":"E-079","Label":"CURRENT_OWNER_AT","City":"Omaha","Degree":"1","Start_ID":"P-043","End_ID":"N-058","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"110","Type":"EDGE","ID":"E-080","Label":"JBF_NOMINEE_AT","City":"Omaha","Degree":"1","Start_ID":"N-059","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"111","Type":"EDGE","ID":"E-081","Label":"CURRENT_OWNER_AT","City":"Omaha","Degree":"1","Start_ID":"P-044","End_ID":"N-059","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"112","Type":"EDGE","ID":"E-084","Label":"JBF_NOMINEE_AT","City":"Cleveland","Degree":"1","Start_ID":"N-061","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"113","Type":"EDGE","ID":"E-085","Label":"CURRENT_OWNER_AT","City":"Cleveland","Degree":"1","Start_ID":"P-046","End_ID":"N-061","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"114","Type":"EDGE","ID":"E-086","Label":"JBF_NOMINEE_AT","City":"Bozeman","Degree":"1","Start_ID":"N-062","End_ID":"A-019","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"115","Type":"EDGE","ID":"E-087","Label":"TOP_CHEF_COMPETITOR","City":"Minneapolis","Degree":"2","Start_ID":"N-064","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"TV Show Site","Confidence":"NA"},
        {"Record_ID":"116","Type":"EDGE","ID":"E-088","Label":"JBF_NOMINEE_AT","City":"Minneapolis","Degree":"1","Start_ID":"N-063","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"117","Type":"EDGE","ID":"E-089","Label":"CURRENT_OWNER_AT","City":"Minneapolis","Degree":"1","Start_ID":"P-047","End_ID":"N-063","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"118","Type":"EDGE","ID":"E-091","Label":"IRON_CHEF_COMPETITOR","City":"Minneapolis","Degree":"3","Start_ID":"N-064","End_ID":"A-021","Relationship_Type":"Award","Current":"True","Sources":"Netflix","Confidence":"NA"},
        {"Record_ID":"119","Type":"EDGE","ID":"E-092","Label":"CURRENT_OWNER_AT","City":"Minneapolis","Degree":"1","Start_ID":"P-048","End_ID":"N-064","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"120","Type":"EDGE","ID":"E-094","Label":"BIB_GOURMAND_AWARDED_TO","City":"Chicago","Degree":"1","Start_ID":"A-008","End_ID":"P-049","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"121","Type":"EDGE","ID":"E-095","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"1","Start_ID":"P-049","End_ID":"N-065","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"122","Type":"EDGE","ID":"E-097","Label":"BIB_GOURMAND_AWARDED_TO","City":"Chicago","Degree":"1","Start_ID":"A-008","End_ID":"P-050","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"123","Type":"EDGE","ID":"E-098","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"1","Start_ID":"P-050","End_ID":"N-066","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"124","Type":"EDGE","ID":"E-100","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"3","Start_ID":"P-051","End_ID":"N-067","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"125","Type":"EDGE","ID":"E-101","Label":"JBF_WINNER_AT","City":"Chicago","Degree":"4","Start_ID":"N-067","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Website","Confidence":"NA"},
        {"Record_ID":"126","Type":"EDGE","ID":"E-102","Label":"CURRENT_HEAD_CHEF_AT","City":"Anchorage","Degree":"1","Start_ID":"P-028","End_ID":"N-027","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"127","Type":"EDGE","ID":"E-104","Label":"CURRENT_HEAD_CHEF_AT","City":"Anchorage","Degree":"3","Start_ID":"P-052","End_ID":"N-068","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"128","Type":"EDGE","ID":"E-110","Label":"JBF_WINNER_AT","City":"Minneapolis","Degree":"1","Start_ID":"N-071","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Website 2024","Confidence":"NA"},
        {"Record_ID":"129","Type":"EDGE","ID":"E-111","Label":"CURRENT_OWNER_AT","City":"Minneapolis","Degree":"1","Start_ID":"P-055","End_ID":"N-071","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"130","Type":"EDGE","ID":"E-112","Label":"JBF_WINNER_AT","City":"Breckenridge","Degree":"1","Start_ID":"N-072","End_ID":"A-019","Relationship_Type":"Award","Current":"True","Sources":"JBF Website 2024","Confidence":"NA"},
        {"Record_ID":"131","Type":"EDGE","ID":"E-113","Label":"CURRENT_OWNER_AT","City":"Breckenridge","Degree":"1","Start_ID":"P-056","End_ID":"N-072","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"132","Type":"EDGE","ID":"E-116","Label":"BIB_GOURMAND_AWARDED_TO","City":"Chicago","Degree":"1","Start_ID":"A-008","End_ID":"P-058","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide 2025","Confidence":"NA"},
        {"Record_ID":"133","Type":"EDGE","ID":"E-119","Label":"JBF_AWARD_WINNER","City":"Chicago","Degree":"1","Start_ID":"P-057","End_ID":"A-008","Relationship_Type":"Award","Current":"True","Sources":"JBF Website 2024","Confidence":"NA"},
        {"Record_ID":"134","Type":"EDGE","ID":"E-120","Label":"JBF_NOMINEE_AT","City":"Milwaukee","Degree":"1","Start_ID":"N-056","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"135","Type":"EDGE","ID":"E-121","Label":"JBF_NOMINEE_AT","City":"Milwaukee","Degree":"1","Start_ID":"P-040","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"136","Type":"EDGE","ID":"E-122","Label":"JBF_NOMINEE_AT","City":"Madison","Degree":"1","Start_ID":"N-074","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"137","Type":"EDGE","ID":"E-123","Label":"CURRENT_HEAD_CHEF_AT","City":"Madison","Degree":"2","Start_ID":"P-059","End_ID":"N-074","Relationship_Type":"Employment","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"138","Type":"EDGE","ID":"E-125","Label":"JBF_NOMINEE_AT","City":"Omaha","Degree":"1","Start_ID":"N-058","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"139","Type":"EDGE","ID":"E-126","Label":"JBF_NOMINEE_AT","City":"Omaha","Degree":"1","Start_ID":"N-059","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"140","Type":"EDGE","ID":"E-128","Label":"JBF_NOMINEE_AT","City":"KC","Degree":"3","Start_ID":"N-075","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"141","Type":"EDGE","ID":"E-132","Label":"BIB_GOURMAND_AWARDED_TO","City":"Chicago","Degree":"1","Start_ID":"A-008","End_ID":"P-060","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"142","Type":"EDGE","ID":"E-133","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"1","Start_ID":"P-060","End_ID":"N-077","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"143","Type":"EDGE","ID":"E-134","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"2","Start_ID":"N-077","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2022","Confidence":"NA"},
        {"Record_ID":"144","Type":"EDGE","ID":"E-137","Label":"JBF_NOMINEE_AT","City":"Bozeman","Degree":"1","Start_ID":"N-062","End_ID":"A-019","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"145","Type":"EDGE","ID":"E-146","Label":"JBF_NOMINEE_AT","City":"Cleveland","Degree":"1","Start_ID":"N-061","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"146","Type":"EDGE","ID":"E-150","Label":"JBF_NOMINEE_AT","City":"Milwaukee","Degree":"1","Start_ID":"N-055","End_ID":"A-004","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"147","Type":"EDGE","ID":"E-151","Label":"JBF_NOMINEE_AT","City":"Madison","Degree":"1","Start_ID":"P-015","End_ID":"A-008","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"148","Type":"EDGE","ID":"E-156","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"1","Start_ID":"P-064","End_ID":"A-008","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"149","Type":"EDGE","ID":"E-157","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"1","Start_ID":"P-064","End_ID":"N-082","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"150","Type":"EDGE","ID":"E-158","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"2","Start_ID":"N-082","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"151","Type":"EDGE","ID":"E-161","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"2","Start_ID":"N-083","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"152","Type":"EDGE","ID":"E-163","Label":"MASTERCHEF_COMPETITOR","City":"Des Moines","Degree":"2","Start_ID":"N-052","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"TV Show Site","Confidence":"NA"},
        {"Record_ID":"153","Type":"EDGE","ID":"E-164","Label":"JBF_NOMINEE_AT","City":"Boise","Degree":"1","Start_ID":"N-084","End_ID":"A-003","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2023","Confidence":"NA"},
        {"Record_ID":"154","Type":"EDGE","ID":"E-165","Label":"CURRENT_OWNER_AT","City":"Boise","Degree":"1","Start_ID":"P-066","End_ID":"N-084","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"155","Type":"EDGE","ID":"E-167","Label":"JBF_NOMINEE_AT","City":"Seattle","Degree":"3","Start_ID":"N-085","End_ID":"A-003","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"156","TYPE":"EDGE","ID":"E-169","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"2","Start_ID":"P-049","End_ID":"A-008","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"157","Type":"EDGE","ID":"E-172","Label":"BIB_GOURMAND_AWARDED_TO","City":"Chicago","Degree":"1","Start_ID":"A-008","End_ID":"P-067","Relationship_Type":"Award","Current":"True","Sources":"Michelin Guide","Confidence":"NA"},
        {"Record_ID":"158","Type":"EDGE","ID":"E-173","Label":"CURRENT_OWNER_AT","City":"Chicago","Degree":"1","Start_ID":"P-067","End_ID":"N-087","Relationship_Type":"Ownership","Current":"True","Sources":"Restaurant Site","Confidence":"NA"},
        {"Record_ID":"159","Type":"EDGE","ID":"E-174","Label":"JBF_NOMINEE_AT","City":"Chicago","Degree":"2","Start_ID":"N-087","End_ID":"A-005","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"160","Type":"EDGE","ID":"E-175","Label":"JBF_NOMINEE_AT","City":"Augusta","Degree":"1","Start_ID":"N-050","End_ID":"A-016","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"161","Type":"EDGE","ID":"E-177","Label":"JBF_NOMINEE_AT","City":"Anchorage","Degree":"1","Start_ID":"P-028","End_ID":"A-003","Relationship_Type":"Award","Current":"True","Sources":"JBF Site 2024","Confidence":"NA"},
        {"Record_ID":"162","Type":"EDGE","ID":"E-178","Label":"TOP_CHEF_COMPETITOR","City":"Anchorage","Degree":"2","Start_ID":"N-068","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"TV Show Site","Confidence":"NA"},
        {"Record_ID":"163","Type":"EDGE","ID":"E-181","Label":"TOP_CHEF_COMPETITOR","City":"NYC","Degree":"3","Start_ID":"N-034","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"Bravo TV","Confidence":"NA"},
        {"Record_ID":"164","Type":"EDGE","ID":"E-182","Label":"TOP_CHEF_COMPETITOR","City":"SF/LA","Degree":"4","Start_ID":"N-031","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"Bravo TV","Confidence":"NA"},
        {"Record_ID":"165","Type":"EDGE","ID":"E-183","Label":"TOP_CHEF_COMPETITOR","City":"NYC","Degree":"5","Start_ID":"N-029","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"Bravo TV","Confidence":"NA"},
        {"Record_ID":"166","Type":"EDGE","ID":"E-184","Label":"MASTERCHEF_COMPETITOR","City":"Dothan","Degree":"1","Start_ID":"N-032","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"167","Type":"EDGE","ID":"E-185","Label":"MASTERCHEF_COMPETITOR","City":"KC","Degree":"2","Start_ID":"N-035","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"168","Type":"EDGE","ID":"E-186","Label":"MASTERCHEF_COMPETITOR","City":"LA","Degree":"3","Start_ID":"N-042","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"169","Type":"EDGE","ID":"E-187","Label":"MASTERCHEF_COMPETITOR","City":"Louisville","Degree":"4","Start_ID":"N-036","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"170","Type":"EDGE","ID":"E-188","Label":"NEXT_LEVEL_CHEF_COMPETITOR","City":"Multiple","Degree":"1","Start_ID":"N-044","End_ID":"A-013","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"171","Type":"EDGE","ID":"E-189","Label":"FOOD_WINE_BEST_NEW_CHEF","City":"Anchorage","Degree":"1","Start_ID":"N-027","End_ID":"A-020","Relationship_Type":"Award","Current":"True","Sources":"Magazine Site","Confidence":"NA"},
        {"Record_ID":"172","Type":"EDGE","ID":"E-190","Label":"FINAL_TABLE_FINALIST","City":"LA","Degree":"1","Start_ID":"N-041","End_ID":"A-021","Relationship_Type":"Award","Current":"True","Sources":"Netflix","Confidence":"NA"},
        {"Record_ID":"173","Type":"EDGE","ID":"E-191","Label":"MASTERCHEF_COMPETITOR","City":"GA","Degree":"1","Start_ID":"N-037","End_ID":"A-014","Relationship_Type":"Award","Current":"True","Sources":"Fox TV","Confidence":"NA"},
        {"Record_ID":"174","Type":"EDGE","ID":"E-192","Label":"TOP_CHEF_COMPETITOR","City":"Multiple","Degree":"1","Start_ID":"N-043","End_ID":"A-006","Relationship_Type":"Award","Current":"True","Sources":"Bravo TV","Confidence":"NA"}
    ]
};


// Use the injected data directly
const nodeData = graphData.nodes;
const edgeData = graphData.links;

// 1. Process Node Data
// --- Filter nodes and map data types
const nodes = nodeData
    .filter(d => d.ID && d.Name)
    .map(d => ({
        id: d.ID,
        name: d.Name,
        type: d['Role/Primary'], // Use bracket notation for keys with special characters
        city: d.City,
        state: d.State,
        emoji: d.Emoji,
        cuisine: d.Cuisine,
        flags: d.Flags,
        group: d['Role/Primary'] === 'Person' ? 1 : (d['Role/Primary'] === 'Place' ? 2 : 3)
    }));

// 2. Process Edge Data
// --- Map edges, ensuring source and target IDs match the nodes
const links = edgeData
    .map(d => ({
        source: d.Start_ID,
        target: d.End_ID,
        label: d.Label,
        type: d.Relationship_Type
    }));

// 3. Initialize Force Simulation
// --- Set up D3 force simulation parameters
const width = 1200;
const height = 800;
const center_x = width / 2;
const center_y = height / 2;

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(150)) // Set link distance
    .force("charge", d3.forceManyBody().strength(-300)) // Repulsion force
    .force("center", d3.forceCenter(center_x, center_y)) // Center the graph
    .force("collide", d3.forceCollide().radius(30).iterations(2)); // Prevent node overlap

// 4. Create SVG Container
// --- Select the container and append the SVG element
// NOTE: We select the container but append the SVG. This is the key.
const svgContainer = d3.select("#chart-container");

const svg = svgContainer.append("svg")
    .attr("width", width)
    .attr("height", height)
    // Add the Zoom behavior to the SVG element
    .call(d3.zoom().on("zoom", (event) => {
        // Apply the transform to the main 'g' element inside the SVG
        g.attr("transform", event.transform);
    }));

// Create a main group element 'g' to hold all graph elements (links and nodes)
const g = svg.append("g");


// 5. Draw Links (Edges)
// --- Append lines for edges to the 'g' element
const link = g.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("class", d => `link ${d.type}`);

// 6. Draw Nodes
// --- Append groups for nodes to the 'g' element
const node = g.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter().append("g")
    .attr("class", d => `node-group ${d.type.toLowerCase().replace(/\s/g, '-')}`)
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged) 
        .on("end", dragended));

// --- Append Circles for visual grouping/size
node.append("circle")
    .attr("r", 15)
    .attr("class", "node-circle");

// --- Append Emojis/Text Labels
node.append("text")
    .attr("dy", 5) // vertically center the emoji
    .attr("text-anchor", "middle")
    .attr("class", "node-label")
    .text(d => d.emoji);

// 7. Add Interactivity (Tooltips and Highlighting)
// --- Add tooltip element (initially hidden)
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// --- Highlighting function (used on hover)
function highlight(d, highlight_type) {
    // Determine the ID of the current node
    const targetId = d.id;

    // Dim all nodes and links
    d3.selectAll(".node-group").classed("inactive", true);
    d3.selectAll(".link").classed("inactive", true);

    // Highlight the hovered node
    d3.select(this).classed("inactive", false).classed("highlighted", true);

    // Highlight linked nodes and edges
    link.classed("highlighted", l => l.source.id === targetId || l.target.id === targetId)
        .classed("inactive", l => !(l.source.id === targetId || l.target.id === targetId));

    node.classed("highlighted", n => {
        const connected = links.some(l => 
            (l.source.id === targetId && l.target.id === n.id) || 
            (l.target.id === targetId && l.source.id === n.id)
        );
        return connected;
    })
    .classed("inactive", function(n) { 
        return !d3.select(this).classed("highlighted"); 
    });
}

// --- Reset function (used on mouse out)
function unhighlight() {
    d3.selectAll(".node-group")
        .classed("inactive", false)
        .classed("highlighted", false);
    d3.selectAll(".link")
        .classed("inactive", false)
        .classed("highlighted", false);
    tooltip.style("opacity", 0);
}

// --- Attach mouse event handlers
node.on("mouseover", function(event, d) {
    highlight.call(this, d, d.type);

    let content = `
        <strong>${d.name} ${d.flags}</strong> (${d.type})<br>
        Cuisine: ${d.cuisine}<br>
        City: ${d.city}
    `;

    tooltip.html(content)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px")
        .transition()
        .duration(200)
        .style("opacity", .9);
})
.on("mouseout", unhighlight);

// 8. Define Tick Function
// --- Updates positions on every tick of the simulation
simulation.on("tick", () => {
    // Update link positions
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    // Update node group positions
    node
        .attr("transform", d => `translate(${d.x},${d.y})`);
});

// 9. Drag Functions (Standard D3)
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
