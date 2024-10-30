const products = [
    {
        id: 1,
        productName: "Arcade Game",
        price: 300,
        img: "https://dodo.ac/np/images/7/7d/Arcade_Combat_Game_NH_Icon.png",
        type: "furniture",
        material: "mixed",
        blurb: "Looking for a blast from the past? This retro gaming machine brings the arcade experience right to your doorstep! With a classic design and a collection of timeless games, it's the perfect way to relive your childhood or introduce a new generation to the joys of arcade gaming."
    },
    {
        id: 2,
        productName: "Lucky Cat",
        price: 1675,
        img: "https://dodo.ac/np/images/9/9c/Lucky_Cat_%28White%29_NH_Icon.png", 
        type: "furniture",
        material: "natural",
        blurb: "Invite good fortune into your home with this adorable figure! This traditional Chinese figure, known for its welcoming wave, is said to bring luck, prosperity, and good fortune. With its charming design and cheerful demeanor, this Lucky Cat is sure to brighten your day."

    },
    {
        id: 3,
        productName: "Store Shelf",
        price: 700,
        img: "https://dodo.ac/np/images/9/91/Store_Shelf_%28White_-_Pantry_Staples%29_NH_Icon.png",
        type: "furniture",
        material: "metal",
        blurb: "Stock up on all your island essentials at this sturdy and stylish grocery store shelf! With plenty of space to display your fresh produce, canned goods, and other pantry staples, this shelf is a must-have for any aspiring island chef."
    },
    {
        id: 4,
        productName: "Chalkboard",
        price: 2600,
        img: "https://dodo.ac/np/images/9/93/Chalkboard_%28Blank%29_NH_Icon.png",
        type: "furniture",
        material: "mixed",
        blurb: "Unleash your creativity with this versatile free-standing chalkboard! Whether you're planning your island's next event, jotting down your latest DIY project, or simply expressing your artistic side, this chalkboard provides a blank canvas for all your ideas."
    },
    {
        id: 5,
        productName: "Ancient Wall",
        price: 3000,
        img: "https://dodo.ac/np/images/e/e5/Ancient_Wall_NH_Icon.png",
        type: "decoration",
        material: "natural",
        blurb: "Add a touch of history to your island with this weathered ancient stone wall. Crafted from timeworn stones, this wall offers a durable and rustic look. Perfect for creating a picturesque backdrop for your island adventures."
    },
    {
        id: 6,
        productName: "Table Tennis",
        price: 11000,
        img: "https://dodo.ac/np/images/6/66/Tennis_Table_NH_Icon.png",
        type: "furniture",
        material: "mixed",
        blurb: "Rally up some friends for a friendly game of ping pong on this sturdy and stylish table tennis table! With its smooth surface and adjustable net, it's the perfect way to stay active and have fun with your loved ones. Whether you're a seasoned pro or just starting out, this table is sure to provide hours of entertainment."
    },
    {
        id: 7,
        productName: "Painting",
        price: 4980,
        img: "https://dodo.ac/np/images/a/a5/Amazing_Painting_NH_Icon.png",
        type: "furniture",
        material: "natural",
        blurb: "Experience the grandeur of Rembrandt's masterpiece, The Night Watch, right in your own home! This stunning reproduction captures the intricate details and vibrant colors of the original painting, allowing you to admire the iconic figures and dramatic lighting from the comfort of your island."
    },
    {
        id: 8,
        productName: "Enamel Lamp",
        price: 2100,
        img: "https://dodo.ac/np/images/7/7b/Enamel_Lamp_%28Green%29_NH_Icon.png",
        type: "decoration",
        material: "metal",
        blurb: "Illuminate your island home with this charming enamel ceiling lamp! With its vintage-inspired design and soft, warm glow, this lamp adds a touch of classic elegance to any room. Perfect for creating a cozy and inviting atmosphere, whether you're relaxing after a long day or entertaining guests."
    },
    {
        id: 9,
        productName: "Antique Chair",
        price: 1200,
        img: "https://dodo.ac/np/images/2/2a/Antique_Chair_%28Brown%29_NH_Icon.png",
        type: "furniture",
        material: "natural",
        blurb: "Add a touch of timeless elegance to your island home with this antique wooden chair. Crafted from high-quality wood and featuring intricate details, this chair offers a comfortable and stylish seating option. Whether you're enjoying a leisurely meal or simply relaxing with a good book, this antique chair is the perfect place to unwind."
    },
    {
        id: 10,
        productName: "Jukebox",
        price: 2700,
        img: "https://dodo.ac/np/images/3/37/Brake_Tapper_NH_Icon.png",
        type: "furniture",
        material: "mixed",
        blurb: "Step back in time and relive the golden age of music with this classic jukebox! With its sleek design and vast collection of tunes, this jukebox is the perfect way to add a touch of retro charm to your island home. Whether you're hosting a party or simply enjoying some quiet time alone, this jukebox is sure to provide hours of entertainment."
    },
    {
        id: 11,
        productName: "Beehive",
        price: 2400,
        img: "https://dodo.ac/np/images/f/fc/Beekeeper%27s_Hive_%28Natural%29_NH_Icon.png",
        type: "furniture",
        material: "natural",
        blurb: "Attract buzzing friends to your island and enjoy the sweet rewards with this charming beehive! Watch as busy bees collect pollen and nectar, creating delicious honey that you can harvest for your culinary creations. Not only is it a fun and educational addition to your island, but it also helps support the local ecosystem."
    },
    {
        id: 12,
        productName: "Photocopier",
        price: 1400,
        img: "https://dodo.ac/np/images/d/d2/Copy_Machine_%28White_-_Resource_Document%29_NH_Icon.png",
        type: "furniture",
        material: "mixed",
        blurb: "Capture and reproduce your island memories with this handy photocopier! From important documents to cherished photos, this machine allows you to create instant copies with ease. Perfect for keeping track of your island adventures or sharing your favorite moments with friends and family."
    },
    {
        id: 13,
        productName: "Washer",
        price: 5400,
        img: "https://dodo.ac/np/images/1/1f/Deluxe_Washer_%28White%29_NH_Icon.png",
        type: "furniture",
        material: "metal",
        blurb: "Keep your island wardrobe clean and fresh with this reliable washing machine! With its efficient cleaning technology and durable design, this machine makes laundry day a breeze. Say goodbye to dirty clothes and hello to sparkling clean outfits, all from the comfort of your own island home."
    },
    {
        id: 14,
        productName: "Airplane Wall",
        price: 400,
        img: "https://dodo.ac/np/images/f/f3/Airplane_Wall_NH_Icon.png",
        type: "decoration",
        material: "metal",
        blurb: "Take your island adventures to new heights with this stunning airplane wall decal! This eye-catching design features a vintage airplane soaring through the clouds, adding a touch of wanderlust to any room. Perfect for inspiring your next island getaway or simply creating a unique and stylish atmosphere."
    },
    {
        id: 15,
        productName: "Diner Clock",
        price: 1500,
        img: "https://dodo.ac/np/images/a/ab/Diner_Neon_Clock_%28Purple_-_Red_Lines%29_NH_Icon.png",
        type: "decoration",
        material: "mixed",
        blurb: "Add a retro touch to your island home with this classic diner clock! With its bold, colorful design and easy-to-read numbers, this clock is a stylish and functional addition to any room. Whether you're hanging it in your kitchen, living room, or bedroom, this diner clock is sure to add a touch of vintage charm."
    },
]

module.exports = products;