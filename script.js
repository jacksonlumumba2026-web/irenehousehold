/* =============================================
   IRENE HOUSEHOLD COLLECTIONS
   script.js — Clean build
   ============================================= */

/* ── PRODUCTS ── */
var PRODUCTS = [{"id":2,"cat":"nets","name":"Round Nets","note":"Fits 3x6, 4x6 and 5x6","price":900,"old":1300,"img":"net.2.jpg","imgs":["net.2.jpg","net.2b.jpg","net.2c.jpg","net.2d.jpg","net.2e.jpg","net.2f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":1,"cat":"nets","name":"Tent Net","note":"Sizes available","price":2000,"old":0,"img":"net.1.jpg","imgs":["net.1.jpg","net.1b.jpg","net.1c.jpg","net.1d.jpg","net.1e.jpg","net.1f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":3,"cat":"nets","name":"Four Stand Mosquito Nets","note":"Pink, purple, white and cream","price":1400,"old":1800,"img":"net.3.jpg","imgs":["net.3.jpg","net.3b.jpg","net.3c.jpg","net.3d.jpg","net.3e.jpg","net.3f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":4,"cat":"nets","name":"Two Stand Rail Mosquito Net","note":"Multiple colours available","price":4300,"old":4500,"img":"net.4.jpg","imgs":["net.4.jpg","net.4b.jpg","net.4c.jpg","net.4d.jpg","net.4e.jpg","net.4f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":5,"cat":"nets","name":"Decker Top Square Mosquito Net","note":"Free size fits all beds","price":1800,"old":0,"img":"net.5.jpg","imgs":["net.5.jpg","net.5b.jpg","net.5c.jpg","net.5d.jpg","net.5e.jpg","net.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":6,"cat":"duvets","name":"Fluffy Duvets","note":"1pc duvet, ultra soft","price":4800,"old":0,"img":"duvet.1.jpg","imgs":["duvet.1.jpg","duvet.1b.jpg","duvet.1c.jpg","duvet.1d.jpg","duvet.1e.jpg","duvet.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":7,"cat":"duvets","name":"Velvet Duvets","note":"Multiple sizes available","price":3800,"old":4300,"img":"duvet.2.jpg","imgs":["duvet.2.jpg","duvet.2b.jpg","duvet.2c.jpg","duvet.2d.jpg","duvet.2e.jpg","duvet.2f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":8,"cat":"duvets","name":"Silk Embroidered Comforter Set","note":"Comes as a full set","price":5500,"old":0,"img":"duvet.3.jpg","imgs":["duvet.3.jpg","duvet.3b.jpg","duvet.3c.jpg","duvet.3d.jpg","duvet.3e.jpg","duvet.3f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":9,"cat":"duvets","name":"Luxury Tufted Home Comforter","note":"Size 6x7 and 6x8","price":5500,"old":0,"img":"duvet.4.jpg","imgs":["duvet.4.jpg","duvet.4b.jpg","duvet.4c.jpg","duvet.4d.jpg","duvet.4e.jpg","duvet.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":10,"cat":"duvets","name":"Binded Duvet Set","note":"Size 7x8","price":4000,"old":0,"img":"duvet.5.jpg","imgs":["duvet.5.jpg","duvet.5b.jpg","duvet.5c.jpg","duvet.5d.jpg","duvet.5e.jpg","duvet.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":11,"cat":"duvets","name":"White Stripped Binded Duvet Set","note":"Hotel grade all white","price":3500,"old":0,"img":"duvet.6.jpg","imgs":["duvet.6.jpg","duvet.6b.jpg","duvet.6c.jpg","duvet.6d.jpg","duvet.6e.jpg","duvet.6f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":12,"cat":"duvets","name":"Single Warm Woolen Duvet","note":"Size 5x6","price":1999,"old":2300,"img":"duvet.7.jpg","imgs":["duvet.7.jpg","duvet.7b.jpg","duvet.7c.jpg","duvet.7d.jpg","duvet.7e.jpg","duvet.7f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":13,"cat":"duvets","name":"Unbinded Cartoon Duvets","note":"1 duvet included","price":2800,"old":0,"img":"duvet.8.jpg","imgs":["duvet.8.jpg","duvet.8b.jpg","duvet.8c.jpg","duvet.8d.jpg","duvet.8e.jpg","duvet.8f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":14,"cat":"duvets","name":"High Quality Flannel Sherpa","note":"Size 150x225cm","price":3300,"old":0,"img":"duvet.9.jpg","imgs":["duvet.9.jpg","duvet.9b.jpg","duvet.9c.jpg","duvet.9d.jpg","duvet.9e.jpg","duvet.9f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":15,"cat":"duvets","name":"White Stripped Duvet Covers Set","note":"1 duvet cover included","price":2700,"old":0,"img":"duvet.10.jpg","imgs":["duvet.10.jpg","duvet.10b.jpg","duvet.10c.jpg","duvet.10d.jpg","duvet.10e.jpg","duvet.10f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":16,"cat":"duvets","name":"3pc Tufted Wave Duvet Cover Set","note":"Elegant comfort luxury soft","price":3700,"old":0,"img":"duvet.11.jpg","imgs":["duvet.11.jpg","duvet.11b.jpg","duvet.11c.jpg","duvet.11d.jpg","duvet.11e.jpg","duvet.11f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":17,"cat":"duvets","name":"Nordic Microfibre Duvet Cover","note":"Full set included","price":4500,"old":0,"img":"duvet.12.jpg","imgs":["duvet.12.jpg","duvet.12b.jpg","duvet.12c.jpg","duvet.12d.jpg","duvet.12e.jpg","duvet.12f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":18,"cat":"duvets","name":"Pinch Pleat Pintuck Duvet Cover","note":"Elegant comfort design","price":3500,"old":0,"img":"duvet.13.jpg","imgs":["duvet.13.jpg","duvet.13b.jpg","duvet.13c.jpg","duvet.13d.jpg","duvet.13e.jpg","duvet.13f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":19,"cat":"duvets","name":"Designer Duvet Covers","note":"2 pillowcases included","price":2600,"old":0,"img":"duvet.14.jpg","imgs":["duvet.14.jpg","duvet.14b.jpg","duvet.14c.jpg","duvet.14d.jpg","duvet.14e.jpg","duvet.14f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":20,"cat":"duvets","name":"Classy Duvet Covers","note":"2 pillowcases included","price":2600,"old":0,"img":"duvet.15.jpg","imgs":["duvet.15.jpg","duvet.15b.jpg","duvet.15c.jpg","duvet.15d.jpg","duvet.15e.jpg","duvet.15f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":21,"cat":"duvets","name":"2 Sided 100 Percent Cotton Duvet","note":"Size 6x7 and 7x8","price":2900,"old":0,"img":"duvet.16.jpg","imgs":["duvet.16.jpg","duvet.16b.jpg","duvet.16c.jpg","duvet.16d.jpg","duvet.16e.jpg","duvet.16f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":22,"cat":"duvets","name":"Cartoon Themed Duvet Covers","note":"Kids sizes available","price":3500,"old":0,"img":"duvet.17.jpg","imgs":["duvet.17.jpg","duvet.17b.jpg","duvet.17c.jpg","duvet.17d.jpg","duvet.17e.jpg","duvet.17f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":23,"cat":"duvets","name":"Binded Cartoon Themed Cotton Duvet","note":"Size 4x6","price":3500,"old":0,"img":"duvet.18.jpg","imgs":["duvet.18.jpg","duvet.18b.jpg","duvet.18c.jpg","duvet.18d.jpg","duvet.18e.jpg","duvet.18f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":24,"cat":"duvets","name":"White Fitted Bedsheets","note":"4pcs pillow case included","price":2900,"old":0,"img":"duvet.19.jpg","imgs":["duvet.19.jpg","duvet.19b.jpg","duvet.19c.jpg","duvet.19d.jpg","duvet.19e.jpg","duvet.19f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":25,"cat":"duvets","name":"Bedrunner","note":"1pc runner and 2 pillow covers","price":1800,"old":2200,"img":"duvet.20.jpg","imgs":["duvet.20.jpg","duvet.20b.jpg","duvet.20c.jpg","duvet.20d.jpg","duvet.20e.jpg","duvet.20f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":26,"cat":"duvets","name":"Mattress Protectors","note":"3x6 waterproof","price":0,"old":0,"img":"duvet.21.jpg","imgs":["duvet.21.jpg","duvet.21b.jpg","duvet.21c.jpg","duvet.21d.jpg","duvet.21e.jpg","duvet.21f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":27,"cat":"kitchenware","name":"6pcs High Quality Signature Hotpots","note":"6pcs hotpot set","price":8000,"old":0,"img":"kitchenware.1.jpg","imgs":["kitchenware.1.jpg","kitchenware.1b.jpg","kitchenware.1c.jpg","kitchenware.1d.jpg","kitchenware.1e.jpg","kitchenware.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":28,"cat":"kitchenware","name":"Redberry Maximus Jumbo","note":"3pcs set 10L 15L 20L","price":11000,"old":0,"img":"kitchenware.2.jpg","imgs":["kitchenware.2.jpg","kitchenware.2b.jpg","kitchenware.2c.jpg","kitchenware.2d.jpg","kitchenware.2e.jpg","kitchenware.2f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":29,"cat":"kitchenware","name":"Carolina Premium Stainless Steel","note":"4pcs in a set","price":4000,"old":0,"img":"kitchenware.3.jpg","imgs":["kitchenware.3.jpg","kitchenware.3b.jpg","kitchenware.3c.jpg","kitchenware.3d.jpg","kitchenware.3e.jpg","kitchenware.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":30,"cat":"kitchenware","name":"Insulated Concord Hotpot","note":"Keeps hot 8 to 12hrs","price":5000,"old":0,"img":"kitchenware.4.jpg","imgs":["kitchenware.4.jpg","kitchenware.4b.jpg","kitchenware.4c.jpg","kitchenware.4d.jpg","kitchenware.4e.jpg","kitchenware.4f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":31,"cat":"kitchenware","name":"3pcs Alixir Insulated Hotpots","note":"2000ml 2500ml 3000ml","price":4000,"old":0,"img":"kitchenware.5.jpg","imgs":["kitchenware.5.jpg","kitchenware.5b.jpg","kitchenware.5c.jpg","kitchenware.5d.jpg","kitchenware.5e.jpg","kitchenware.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":32,"cat":"kitchenware","name":"A Set of 4 Hotpots","note":"1.2L 1.8L 2.4L and 3.5L","price":2800,"old":0,"img":"kitchenware.6.jpg","imgs":["kitchenware.6.jpg","kitchenware.6b.jpg","kitchenware.6c.jpg","kitchenware.6d.jpg","kitchenware.6e.jpg","kitchenware.6f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":33,"cat":"kitchenware","name":"Classy Insulated Balivia Hotpot","note":"Set of 4pcs","price":3400,"old":0,"img":"kitchenware.7.jpg","imgs":["kitchenware.7.jpg","kitchenware.7b.jpg","kitchenware.7c.jpg","kitchenware.7d.jpg","kitchenware.7e.jpg","kitchenware.7f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":34,"cat":"kitchenware","name":"Elegant Hotspots Set","note":"Capacity 1.5L 3L 5L and 9L","price":2800,"old":0,"img":"kitchenware.8.jpg","imgs":["kitchenware.8.jpg","kitchenware.8b.jpg","kitchenware.8c.jpg","kitchenware.8d.jpg","kitchenware.8e.jpg","kitchenware.8f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":35,"cat":"kitchenware","name":"58pcs Ceramic Dinner Set","note":"12 inch oval plate included","price":6999,"old":0,"img":"kitchenware.9.jpg","imgs":["kitchenware.9.jpg","kitchenware.9b.jpg","kitchenware.9c.jpg","kitchenware.9d.jpg","kitchenware.9e.jpg","kitchenware.9f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":36,"cat":"kitchenware","name":"33pcs Wavy Dinner Set","note":"6 wavy plates","price":9999,"old":0,"img":"kitchenware.10.jpg","imgs":["kitchenware.10.jpg","kitchenware.10b.jpg","kitchenware.10c.jpg","kitchenware.10d.jpg","kitchenware.10e.jpg","kitchenware.10f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":37,"cat":"kitchenware","name":"31pcs Dinner Sets","note":"6 plates included","price":8999,"old":0,"img":"kitchenware.11.jpg","imgs":["kitchenware.11.jpg","kitchenware.11b.jpg","kitchenware.11c.jpg","kitchenware.11d.jpg","kitchenware.11e.jpg","kitchenware.11f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":38,"cat":"kitchenware","name":"24pcs Ceramic Dinner Set","note":"24 PCs full premium set","price":7500,"old":0,"img":"kitchenware.12.jpg","imgs":["kitchenware.12.jpg","kitchenware.12b.jpg","kitchenware.12c.jpg","kitchenware.12d.jpg","kitchenware.12e.jpg","kitchenware.12f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":39,"cat":"kitchenware","name":"30pcs Wavy Dinner Set","note":"Luxury design","price":7000,"old":0,"img":"kitchenware.13.jpg","imgs":["kitchenware.13.jpg","kitchenware.13b.jpg","kitchenware.13c.jpg","kitchenware.13d.jpg","kitchenware.13e.jpg","kitchenware.13f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":40,"cat":"kitchenware","name":"24pcs Dinner Sets Black Gold Rim","note":"24 pcs set","price":7000,"old":0,"img":"kitchenware.14.jpg","imgs":["kitchenware.14.jpg","kitchenware.14b.jpg","kitchenware.14c.jpg","kitchenware.14d.jpg","kitchenware.14e.jpg","kitchenware.14f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":41,"cat":"kitchenware","name":"24pcs Dinner Sets White Gold Line","note":"24 pcs set","price":7000,"old":0,"img":"kitchenware.15.jpg","imgs":["kitchenware.15.jpg","kitchenware.15b.jpg","kitchenware.15c.jpg","kitchenware.15d.jpg","kitchenware.15e.jpg","kitchenware.15f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":42,"cat":"kitchenware","name":"24pcs Japanese Dinner Sets","note":"Trendy Japanese style","price":6000,"old":0,"img":"kitchenware.16.jpg","imgs":["kitchenware.16.jpg","kitchenware.16b.jpg","kitchenware.16c.jpg","kitchenware.16d.jpg","kitchenware.16e.jpg","kitchenware.16f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":43,"cat":"kitchenware","name":"32pcs Quadra Dinner Set","note":"6pcs dinner plates","price":6999,"old":0,"img":"kitchenware.17.jpg","imgs":["kitchenware.17.jpg","kitchenware.17b.jpg","kitchenware.17c.jpg","kitchenware.17d.jpg","kitchenware.17e.jpg","kitchenware.17f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":44,"cat":"kitchenware","name":"16pcs Diva Dinner Set","note":"4pcs dinner plates","price":4300,"old":0,"img":"kitchenware.18.jpg","imgs":["kitchenware.18.jpg","kitchenware.18b.jpg","kitchenware.18c.jpg","kitchenware.18d.jpg","kitchenware.18e.jpg","kitchenware.18f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":45,"cat":"kitchenware","name":"Japanese Style Dinnerset","note":"Ceramic premium pieces","price":6500,"old":0,"img":"kitchenware.19.jpg","imgs":["kitchenware.19.jpg","kitchenware.19b.jpg","kitchenware.19c.jpg","kitchenware.19d.jpg","kitchenware.19e.jpg","kitchenware.19f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":46,"cat":"kitchenware","name":"13pcs Ceramic Versace Tea Set","note":"6pcs 250ml cups","price":4000,"old":0,"img":"kitchenware.20.jpg","imgs":["kitchenware.20.jpg","kitchenware.20b.jpg","kitchenware.20c.jpg","kitchenware.20d.jpg","kitchenware.20e.jpg","kitchenware.20f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":47,"cat":"kitchenware","name":"6pcs Ceramic Plates","note":"Marble design","price":1800,"old":0,"img":"kitchenware.21.jpg","imgs":["kitchenware.21.jpg","kitchenware.21b.jpg","kitchenware.21c.jpg","kitchenware.21d.jpg","kitchenware.21e.jpg","kitchenware.21f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":48,"cat":"kitchenware","name":"3pcs Ceramic Serving Dishes","note":"Gold accent design","price":4500,"old":0,"img":"kitchenware.22.jpg","imgs":["kitchenware.22.jpg","kitchenware.22b.jpg","kitchenware.22c.jpg","kitchenware.22d.jpg","kitchenware.22e.jpg","kitchenware.22f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":49,"cat":"kitchenware","name":"3pcs Ceramic Bowls","note":"With lids","price":4500,"old":0,"img":"kitchenware.23.jpg","imgs":["kitchenware.23.jpg","kitchenware.23b.jpg","kitchenware.23c.jpg","kitchenware.23d.jpg","kitchenware.23e.jpg","kitchenware.23f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":50,"cat":"kitchenware","name":"3pcs Trays","note":"Gold trim design","price":3000,"old":0,"img":"kitchenware.24.jpg","imgs":["kitchenware.24.jpg","kitchenware.24b.jpg","kitchenware.24c.jpg","kitchenware.24d.jpg","kitchenware.24e.jpg","kitchenware.24f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":141,"cat":"kitchenware","name":"NEW IN,🔥🔥 3PCS JUMBO SILVER STAR HOTPOTS","note":"Capacity :3200ml\n                 5500ml\n                 7500ml\nFree ;serving spoons,2 bowls","price":5500,"old":6000,"img":"Hotpots1...jpg","imgs":["Hotpots1...jpg","Hotpots1..b.jpg","Hotpots1..c.jpg","Hotpots1..d.jpg","Hotpots1..e.jpg","Hotpots1..f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":51,"cat":"carpets","name":"Fluffy Carpets","note":"5x8 size 280cm","price":3500,"old":0,"img":"carpet.1.jpg","imgs":["carpet.1.jpg","carpet.1b.jpg","carpet.1c.jpg","carpet.1d.jpg","carpet.1e.jpg","carpet.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":52,"cat":"carpets","name":"Faux Fur Carpets","note":"Size 3x6","price":2600,"old":0,"img":"carpet.2.jpg","imgs":["carpet.2.jpg","carpet.2b.jpg","carpet.2c.jpg","carpet.2d.jpg","carpet.2e.jpg","carpet.2f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":53,"cat":"carpets","name":"Fluffy Bedside Mat","note":"Size 4x6","price":2000,"old":0,"img":"carpet.3.jpg","imgs":["carpet.3.jpg","carpet.3b.jpg","carpet.3c.jpg","carpet.3d.jpg","carpet.3e.jpg","carpet.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":54,"cat":"carpets","name":"Home Decorative Mats","note":"Love heart 90cmx90cm","price":2400,"old":0,"img":"carpet.4.jpg","imgs":["carpet.4.jpg","carpet.4b.jpg","carpet.4c.jpg","carpet.4d.jpg","carpet.4e.jpg","carpet.4f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":55,"cat":"carpets","name":"Kitchen Mats","note":"Multiple designs","price":2000,"old":0,"img":"carpet.5.jpg","imgs":["carpet.5.jpg","carpet.5b.jpg","carpet.5c.jpg","carpet.5d.jpg","carpet.5e.jpg","carpet.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":56,"cat":"carpets","name":"Round Anti-slip Mat","note":"Size 55cm by 55cm","price":950,"old":0,"img":"carpet.6.jpg","imgs":["carpet.6.jpg","carpet.6b.jpg","carpet.6c.jpg","carpet.6d.jpg","carpet.6e.jpg","carpet.6f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":57,"cat":"carpets","name":"Kawaii Rug","note":"Non-slip rainbow unicorn","price":950,"old":0,"img":"carpet.7.jpg","imgs":["carpet.7.jpg","carpet.7b.jpg","carpet.7c.jpg","carpet.7d.jpg","carpet.7e.jpg","carpet.7f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":58,"cat":"carpets","name":"Chairpads and Comforters","note":"Classy and elegant","price":800,"old":0,"img":"carpet.8.jpg","imgs":["carpet.8.jpg","carpet.8b.jpg","carpet.8c.jpg","carpet.8d.jpg","carpet.8e.jpg","carpet.8f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":59,"cat":"carpets","name":"Faux Fur Mats","note":"Pink faux fur","price":2600,"old":0,"img":"carpet.9.jpg","imgs":["carpet.9.jpg","carpet.9b.jpg","carpet.9c.jpg","carpet.9d.jpg","carpet.9e.jpg","carpet.9f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":60,"cat":"seatcovers","name":"Printed Polyester Seat Covers","note":"1 Seater @KSh2,500 | 2 Seater @KSh3,000 | 3 Seater @KSh3,300 | 5 Seater 311 @KSh7,500 | 7 Seater 3211 @KSh10,500","price":2500,"old":0,"img":"seatcover.1.jpg","imgs":["seatcover.1.jpg","seatcover.1b.jpg","seatcover.1c.jpg","seatcover.1d.jpg","seatcover.1e.jpg","seatcover.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":61,"cat":"seatcovers","name":"Purely Turkey Ready Made Seat Covers","note":"1 Seater @KSh2,500 | 2 Seater @KSh3,000 | 3 Seater @KSh3,300 | 5 Seater 311 @KSh7,500 | 7 Seater 3211 @KSh10,500","price":2500,"old":0,"img":"seatcover.2.jpg","imgs":["seatcover.2.jpg","seatcover.2b.jpg","seatcover.2c.jpg","seatcover.2d.jpg","seatcover.2e.jpg","seatcover.2f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":131,"cat":"seatcovers","name":"5 Seater Seat Cover Set 3-1-1","note":"Full 5 seater set — Stretchable material — Multiple colours","price":7500,"old":0,"img":"seatcover.3.jpg","imgs":["seatcover.3.jpg","seatcover.3b.jpg","seatcover.3c.jpg","seatcover.3d.jpg","seatcover.3e.jpg","seatcover.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":132,"cat":"seatcovers","name":"5 Seater Seat Cover Set 3-2","note":"Full 5 seater set — Stretchable material — Multiple colours","price":6300,"old":0,"img":"seatcover.4.jpg","imgs":["seatcover.4.jpg","seatcover.4b.jpg","seatcover.4c.jpg","seatcover.4d.jpg","seatcover.4e.jpg","seatcover.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":133,"cat":"seatcovers","name":"3 Seater Seat Cover","note":"Single 3 seater cover — Multiple colours available","price":3300,"old":0,"img":"seatcover.5.jpg","imgs":["seatcover.5.jpg","seatcover.5b.jpg","seatcover.5c.jpg","seatcover.5d.jpg","seatcover.5e.jpg","seatcover.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":134,"cat":"seatcovers","name":"2 Seater Seat Cover","note":"Single 2 seater cover — Multiple colours available","price":3000,"old":0,"img":"seatcover.6.jpg","imgs":["seatcover.6.jpg","seatcover.6b.jpg","seatcover.6c.jpg","seatcover.6d.jpg","seatcover.6e.jpg","seatcover.6f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":135,"cat":"seatcovers","name":"1 Seater Seat Cover","note":"Single 1 seater cover — Multiple colours available","price":2500,"old":0,"img":"seatcover.7.jpg","imgs":["seatcover.7.jpg","seatcover.7b.jpg","seatcover.7c.jpg","seatcover.7d.jpg","seatcover.7e.jpg","seatcover.7f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":62,"cat":"bath","name":"3 in 1 Towel Set","note":"100 percent cotton","price":2500,"old":0,"img":"bath.1.jpg","imgs":["bath.1.jpg","bath.1b.jpg","bath.1c.jpg","bath.1d.jpg","bath.1e.jpg","bath.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":63,"cat":"bath","name":"Prestige Towels","note":"Size 90x165cm","price":1350,"old":0,"img":"bath.2.jpg","imgs":["bath.2.jpg","bath.2b.jpg","bath.2c.jpg","bath.2d.jpg","bath.2e.jpg","bath.2f.jpg"],"badge":"HOTEL","badgeType":"hotel","inStock":true},{"id":64,"cat":"bath","name":"Bath Towels Micro Fiber","note":"Soft and absorbent","price":1100,"old":0,"img":"bath.3.jpg","imgs":["bath.3.jpg","bath.3b.jpg","bath.3c.jpg","bath.3d.jpg","bath.3e.jpg","bath.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":65,"cat":"bath","name":"Bath Gown","note":"Premium quality","price":1999,"old":2500,"img":"bath.4.jpg","imgs":["bath.4.jpg","bath.4b.jpg","bath.4c.jpg","bath.4d.jpg","bath.4e.jpg","bath.4f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":66,"cat":"bath","name":"Micro Fibre Bath Wrap","note":"Hair wrap 65cm by 25cm","price":1300,"old":0,"img":"bath.5.jpg","imgs":["bath.5.jpg","bath.5b.jpg","bath.5c.jpg","bath.5d.jpg","bath.5e.jpg","bath.5f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":67,"cat":"bath","name":"Hooded Kids Bathrobe","note":"Ages 3 to 12 years","price":2000,"old":0,"img":"bath.6.jpg","imgs":["bath.6.jpg","bath.6b.jpg","bath.6c.jpg","bath.6d.jpg","bath.6e.jpg","bath.6f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":68,"cat":"bath","name":"3pcs Fluffy Toilet Set","note":"Cover mat and rug","price":1800,"old":0,"img":"bath.7.jpg","imgs":["bath.7.jpg","bath.7b.jpg","bath.7c.jpg","bath.7d.jpg","bath.7e.jpg","bath.7f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":69,"cat":"bath","name":"3 Pieces Body Cleaning Wash Clothes","note":"Shower ball included","price":800,"old":0,"img":"bath.8.jpg","imgs":["bath.8.jpg","bath.8b.jpg","bath.8c.jpg","bath.8d.jpg","bath.8e.jpg","bath.8f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":70,"cat":"furniture","name":"Four Seater Marble Dining Table","note":"Marble top premium","price":48500,"old":0,"img":"furniture.1.jpg","imgs":["furniture.1.jpg","furniture.1b.jpg","furniture.1c.jpg","furniture.1d.jpg","furniture.1e.jpg","furniture.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":71,"cat":"furniture","name":"Pure Marble Coffee Table","note":"White golden 8 stands","price":12500,"old":16500,"img":"furniture.2.jpg","imgs":["furniture.2.jpg","furniture.2b.jpg","furniture.2c.jpg","furniture.2d.jpg","furniture.2e.jpg","furniture.2f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":72,"cat":"furniture","name":"3 in 1 Coffee Table","note":"Classic side table living room","price":19500,"old":20999,"img":"furniture.3.jpg","imgs":["furniture.3.jpg","furniture.3b.jpg","furniture.3c.jpg","furniture.3d.jpg","furniture.3e.jpg","furniture.3f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":73,"cat":"furniture","name":"Four Seater Dining Table","note":"Wooden top and chairs","price":31900,"old":0,"img":"furniture.4.jpg","imgs":["furniture.4.jpg","furniture.4b.jpg","furniture.4c.jpg","furniture.4d.jpg","furniture.4e.jpg","furniture.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":74,"cat":"furniture","name":"Four Seater Dining Table White","note":"White finish","price":23999,"old":0,"img":"furniture.5.jpg","imgs":["furniture.5.jpg","furniture.5b.jpg","furniture.5c.jpg","furniture.5d.jpg","furniture.5e.jpg","furniture.5f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":75,"cat":"furniture","name":"Minimalist Two Seater Dining Table","note":"Modern design","price":16999,"old":0,"img":"furniture.6.jpg","imgs":["furniture.6.jpg","furniture.6b.jpg","furniture.6c.jpg","furniture.6d.jpg","furniture.6e.jpg","furniture.6f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":77,"cat":"furniture","name":"Luxury Creative Side Table","note":"Size 68x40x60cm","price":6999,"old":7999,"img":"furniture.8.jpg","imgs":["furniture.8.jpg","furniture.8b.jpg","furniture.8c.jpg","furniture.8d.jpg","furniture.8e.jpg","furniture.8f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":78,"cat":"furniture","name":"Marbletop Luxury Double Drawer","note":"Two drawer large capacity","price":8999,"old":9500,"img":"furniture.9.jpg","imgs":["furniture.9.jpg","furniture.9b.jpg","furniture.9c.jpg","furniture.9d.jpg","furniture.9e.jpg","furniture.9f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":79,"cat":"furniture","name":"Nordic Luxury Double Drawer White","note":"Two drawer large capacity","price":7500,"old":8500,"img":"furniture.10.jpg","imgs":["furniture.10.jpg","furniture.10b.jpg","furniture.10c.jpg","furniture.10d.jpg","furniture.10e.jpg","furniture.10f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":80,"cat":"furniture","name":"Verona Bistro Arm Chair","note":"Grey and Light Pink","price":10800,"old":0,"img":"furniture.11.jpg","imgs":["furniture.11.jpg","furniture.11b.jpg","furniture.11c.jpg","furniture.11d.jpg","furniture.11e.jpg","furniture.11f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":81,"cat":"furniture","name":"Eame Chairs","note":"Per chair","price":3600,"old":0,"img":"furniture.12.jpg","imgs":["furniture.12.jpg","furniture.12b.jpg","furniture.12c.jpg","furniture.12d.jpg","furniture.12e.jpg","furniture.12f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":82,"cat":"furniture","name":"Plastic Wardrobe Three Column","note":"Multiple colours","price":5500,"old":0,"img":"furniture.13.jpg","imgs":["furniture.13.jpg","furniture.13b.jpg","furniture.13c.jpg","furniture.13d.jpg","furniture.13e.jpg","furniture.13f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":83,"cat":"furniture","name":"Metallic Shoe and Clothe Rack","note":"Double row hook design","price":2500,"old":0,"img":"furniture.14.jpg","imgs":["furniture.14.jpg","furniture.14b.jpg","furniture.14c.jpg","furniture.14d.jpg","furniture.14e.jpg","furniture.14f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":84,"cat":"furniture","name":"Tree Book Shelf","note":"Size 147.2cm x 21.5 x 34cm","price":6300,"old":0,"img":"furniture.15.jpg","imgs":["furniture.15.jpg","furniture.15b.jpg","furniture.15c.jpg","furniture.15d.jpg","furniture.15e.jpg","furniture.15f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":85,"cat":"furniture","name":"Inflatable Deluxe Lounge Seat","note":"Portable and inflatable 2pcs","price":4550,"old":0,"img":"furniture.16.jpg","imgs":["furniture.16.jpg","furniture.16b.jpg","furniture.16c.jpg","furniture.16d.jpg","furniture.16e.jpg","furniture.16f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":86,"cat":"furniture","name":"Toilet and Washing Machine Rack","note":"Space saving design","price":2999,"old":0,"img":"furniture.17.jpg","imgs":["furniture.17.jpg","furniture.17b.jpg","furniture.17c.jpg","furniture.17d.jpg","furniture.17e.jpg","furniture.17f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":87,"cat":"furniture","name":"Balcony Privacy Shield","note":"Colours available","price":4500,"old":0,"img":"furniture.18.jpg","imgs":["furniture.18.jpg","furniture.18b.jpg","furniture.18c.jpg","furniture.18d.jpg","furniture.18e.jpg","furniture.18f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":88,"cat":"furniture","name":"Kids Stackable Bed","note":"Space saving design","price":6500,"old":0,"img":"furniture.19.jpg","imgs":["furniture.19.jpg","furniture.19b.jpg","furniture.19c.jpg","furniture.19d.jpg","furniture.19e.jpg","furniture.19f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":89,"cat":"furniture","name":"Kindergarten Tables and Chairs","note":"Kindergarten tables","price":10950,"old":0,"img":"furniture.20.jpg","imgs":["furniture.20.jpg","furniture.20b.jpg","furniture.20c.jpg","furniture.20d.jpg","furniture.20e.jpg","furniture.20f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":90,"cat":"furniture","name":"3 in 1 Coffee Table Round","note":"Classic side table","price":19999,"old":0,"img":"furniture.21.jpg","imgs":["furniture.21.jpg","furniture.21b.jpg","furniture.21c.jpg","furniture.21d.jpg","furniture.21e.jpg","furniture.21f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":91,"cat":"furniture","name":"Nordic Luxury Double Drawer Bedside","note":"Two drawer large capacity","price":7500,"old":8500,"img":"furniture.22.jpg","imgs":["furniture.22.jpg","furniture.22b.jpg","furniture.22c.jpg","furniture.22d.jpg","furniture.22e.jpg","furniture.22f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":92,"cat":"kids","name":"Biaowang Large Capacity School Bag","note":"Side pockets for water bottle","price":2300,"old":0,"img":"kid.1.jpg","imgs":["kid.1.jpg","kid.1b.jpg","kid.1c.jpg","kid.1d.jpg","kid.1e.jpg","kid.1f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":93,"cat":"kids","name":"Big Size Insulated Kids Lunch Bag","note":"Fits lunch snack and water bottle","price":850,"old":0,"img":"kid.2.jpg","imgs":["kid.2.jpg","kid.2b.jpg","kid.2c.jpg","kid.2d.jpg","kid.2e.jpg","kid.2f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":94,"cat":"kids","name":"Girls High Quality Leather Shoes","note":"Material leather","price":2500,"old":0,"img":"kid.3.jpg","imgs":["kid.3.jpg","kid.3b.jpg","kid.3c.jpg","kid.3d.jpg","kid.3e.jpg","kid.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":95,"cat":"kids","name":"Boys High Quality Leather Shoes","note":"Material leather","price":2500,"old":0,"img":"kid.4.jpg","imgs":["kid.4.jpg","kid.4b.jpg","kid.4c.jpg","kid.4d.jpg","kid.4e.jpg","kid.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":139,"cat":"kids","name":"Boys High Quality Leather Shoes","note":"Material leather","price":2500,"old":0,"img":"kid.4.jpg","imgs":["kid.4.jpg","kid.4b.jpg","kid.4c.jpg","kid.4d.jpg","kid.4e.jpg","kid.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":97,"cat":"electronics","name":"Q7S Smart WiFi Camera V380","note":"Pan & Tilt 355° — Night Vision — Motion Detection — Two-Way Audio","price":2800,"old":0,"img":"electronics.1.jpg","imgs":["electronics.1.jpg","electronics.1b.jpg","electronics.1c.jpg","electronics.1d.jpg","electronics.1e.jpg","electronics.1f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":98,"cat":"electronics","name":"Cute Cat Kids Watch Combo","note":"Watch + Wireless Earbuds + Cute Case — Perfect gift for kids","price":1350,"old":0,"img":"electronics.2.jpg","imgs":["electronics.2.jpg","electronics.2b.jpg","electronics.2c.jpg","electronics.2d.jpg","electronics.2e.jpg","electronics.2f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":99,"cat":"travel","name":"Neck Pillow with Phone Holder Pocket","note":"Built-in side pocket for your phone — Travel essential","price":950,"old":0,"img":"electronics.3.jpg","imgs":["electronics.3.jpg","electronics.3b.jpg","electronics.3c.jpg","electronics.3d.jpg","electronics.3e.jpg","electronics.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":100,"cat":"cookware","name":"Edenberg 12pcs Stainless Cookware","note":"Capacities: 2.1L 2.9L 3.9L 5.1L 6.5L 8.2L — Code 4037","price":9500,"old":0,"img":"cookware.1.jpg","imgs":["cookware.1.jpg","cookware.1b.jpg","cookware.1c.jpg","cookware.1d.jpg","cookware.1e.jpg","cookware.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":101,"cat":"cookware","name":"Nunix 50x55 Standing Cooker 3+1","note":"3 Gas + 1 Electric burner — New model with gas oven","price":18999,"old":0,"img":"cookware.2.jpg","imgs":["cookware.2.jpg","cookware.2b.jpg","cookware.2c.jpg","cookware.2d.jpg","cookware.2e.jpg","cookware.2f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":102,"cat":"cookware","name":"Nunix Table Top Cooker 3+1","note":"3 Gas + 1 Electric burner — Compact tabletop design","price":6000,"old":0,"img":"cookware.3.jpg","imgs":["cookware.3.jpg","cookware.3b.jpg","cookware.3c.jpg","cookware.3d.jpg","cookware.3e.jpg","cookware.3f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":103,"cat":"cookware","name":"Nunix Full Gas Standing Cooker","note":"Full gas cooker with shelf — Ideal for home and kitchen","price":7900,"old":0,"img":"cookware.4.jpg","imgs":["cookware.4.jpg","cookware.4b.jpg","cookware.4c.jpg","cookware.4d.jpg","cookware.4e.jpg","cookware.4f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":104,"cat":"travel","name":"Unbreakable PP 3-in-1 Suitcase Set","note":"3 sizes — 360° wheels — Double zip — Scratch resistant — 4 colours","price":7999,"old":0,"img":"travel.1.jpg","imgs":["travel.1.jpg","travel.1b.jpg","travel.1c.jpg","travel.1d.jpg","travel.1e.jpg","travel.1f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":105,"cat":"travel","name":"Waterproof Outdoor Picnic Mat","note":"150x200cm — Available in 4 colours — Foldable and portable","price":750,"old":0,"img":"travel.2.jpg","imgs":["travel.2.jpg","travel.2b.jpg","travel.2c.jpg","travel.2d.jpg","travel.2e.jpg","travel.2f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":106,"cat":"decor","name":"Plain Coral Fleece Throw Blanket","note":"Sizes 4/5, 5/6, 6/6 — Soft and cosy — Multiple colours","price":999,"old":0,"img":"decor.1.jpg","imgs":["decor.1.jpg","decor.1b.jpg","decor.1c.jpg","decor.1d.jpg","decor.1e.jpg","decor.1f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":107,"cat":"decor","name":"3pcs 3D Non-Slip Toilet Mat Set","note":"Heavy grip rubber underside — Size 45x75cm + 2pcs 40x45cm","price":850,"old":0,"img":"decor.2.jpg","imgs":["decor.2.jpg","decor.2b.jpg","decor.2c.jpg","decor.2d.jpg","decor.2e.jpg","decor.2f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":108,"cat":"decor","name":"3-Layer Oval Trolley Rack Table","note":"60x30x67cm — Black or white marble — 2 round top shelves","price":2999,"old":0,"img":"decor.3.jpg","imgs":["decor.3.jpg","decor.3b.jpg","decor.3c.jpg","decor.3d.jpg","decor.3e.jpg","decor.3f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":109,"cat":"decor","name":"Wave Pillow Case","note":"Size 45x45cm — Case only","price":200,"old":0,"img":"decor.4.jpg","imgs":["decor.4.jpg","decor.4b.jpg","decor.4c.jpg","decor.4d.jpg","decor.4e.jpg","decor.4f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":110,"cat":"decor","name":"Wave Pillow Insert","note":"Size 45x45cm — Insert only","price":200,"old":0,"img":"decor.4b.jpg","imgs":["decor.4b.jpg","decor.4bb.jpg","decor.4bc.jpg","decor.4bd.jpg","decor.4be.jpg","decor.4bf.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":111,"cat":"decor","name":"Wave Pillow + Case Set","note":"Size 45x45cm — Pillow and case included","price":400,"old":0,"img":"decor.4c.jpg","imgs":["decor.4c.jpg","decor.4cb.jpg","decor.4cc.jpg","decor.4cd.jpg","decor.4ce.jpg","decor.4cf.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":113,"cat":"decor","name":"Tufted Bohemian Throw Pillow Cover","note":"Square 45x45cm or Lumbar 30x50cm — @750 each","price":750,"old":0,"img":"decor.6.jpg","imgs":["decor.6.jpg","decor.6b.jpg","decor.6c.jpg","decor.6d.jpg","decor.6e.jpg","decor.6f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":140,"cat":"decor","name":"Boho pillowscases","note":"18*18\"","price":850,"old":0,"img":"Boho cases 11.jpg","imgs":["Boho cases 11.jpg","Boho cases 11b.jpg","Boho cases 11c.jpg","Boho cases 11d.jpg","Boho cases 11e.jpg","Boho cases 11f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":114,"cat":"carpets","name":"Heavy Plastic Doormat","note":"Size 50x80cm — Durable heavy duty","price":1200,"old":0,"img":"carpet.10.jpg","imgs":["carpet.10.jpg","carpet.10b.jpg","carpet.10c.jpg","carpet.10d.jpg","carpet.10e.jpg","carpet.10f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":115,"cat":"carpets","name":"Turkish Doormat","note":"Size 50x80cm — Premium Turkish design","price":1300,"old":0,"img":"carpet.11.jpg","imgs":["carpet.11.jpg","carpet.11b.jpg","carpet.11c.jpg","carpet.11d.jpg","carpet.11e.jpg","carpet.11f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":116,"cat":"carpets","name":"Memory Foam Mat","note":"Size 40x60cm @550 or 50x80cm @650","price":550,"old":0,"img":"carpet.12.jpg","imgs":["carpet.12.jpg","carpet.12b.jpg","carpet.12c.jpg","carpet.12d.jpg","carpet.12e.jpg","carpet.12f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":117,"cat":"carpets","name":"3D Smooth Doormat","note":"Size 50x80cm — Stylish 3D design","price":600,"old":0,"img":"carpet.13.jpg","imgs":["carpet.13.jpg","carpet.13b.jpg","carpet.13c.jpg","carpet.13d.jpg","carpet.13e.jpg","carpet.13f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":118,"cat":"carpets","name":"Rubber Absorbent Mat","note":"Size 50x80cm — Non-slip rubber base","price":850,"old":0,"img":"carpet.14.jpg","imgs":["carpet.14.jpg","carpet.14b.jpg","carpet.14c.jpg","carpet.14d.jpg","carpet.14e.jpg","carpet.14f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":119,"cat":"carpets","name":"Non-Slip Memory Foam Mat","note":"40x60cm @850 or 50x80cm @1250 navy blue only","price":850,"old":0,"img":"carpet.15.jpg","imgs":["carpet.15.jpg","carpet.15b.jpg","carpet.15c.jpg","carpet.15d.jpg","carpet.15e.jpg","carpet.15f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":120,"cat":"carpets","name":"Translucent Bathroom Anti-Slip Mat","note":"Large 50x80cm @800 or Medium 40x60cm @650","price":650,"old":0,"img":"carpet.16.jpg","imgs":["carpet.16.jpg","carpet.16b.jpg","carpet.16c.jpg","carpet.16d.jpg","carpet.16e.jpg","carpet.16f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":121,"cat":"carpets","name":"Heavy Large Plastic Outdoor Doormat","note":"Size 60x90cm — Extra large heavy duty","price":1500,"old":0,"img":"carpet.17.jpg","imgs":["carpet.17.jpg","carpet.17b.jpg","carpet.17c.jpg","carpet.17d.jpg","carpet.17e.jpg","carpet.17f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":123,"cat":"duvets","name":"Single Velvet Fluffy Duvet","note":"Size 4x6 and 5x6 — 1 fluffy fleece duvet","price":2999,"old":0,"img":"duvet.23.jpg","imgs":["duvet.23.jpg","duvet.23b.jpg","duvet.23c.jpg","duvet.23d.jpg","duvet.23e.jpg","duvet.23f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":124,"cat":"duvets","name":"6pc Luxury Velvet Plush Duvet Set","note":"Size 6x6 and 6x7 — 1 duvet, 1 bedsheet, 4 pillowcases","price":4300,"old":0,"img":"duvet.24.jpg","imgs":["duvet.24.jpg","duvet.24b.jpg","duvet.24c.jpg","duvet.24d.jpg","duvet.24e.jpg","duvet.24f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":126,"cat":"furniture","name":"Kids Fashion Plastic Wardrobe","note":"Colourful kids wardrobe — Multiple sections","price":4999,"old":0,"img":"furniture.23.jpg","imgs":["furniture.23.jpg","furniture.23b.jpg","furniture.23c.jpg","furniture.23d.jpg","furniture.23e.jpg","furniture.23f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":127,"cat":"cookware","name":"Electromate Hand Mixer","note":"Powerful hand mixer — Perfect for baking","price":1299,"old":0,"img":"cookware.5.jpg","imgs":["cookware.5.jpg","cookware.5b.jpg","cookware.5c.jpg","cookware.5d.jpg","cookware.5e.jpg","cookware.5f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":128,"cat":"cookware","name":"9.5L Tea Urn Double Tap","note":"Large capacity — Double tap for easy serving","price":2999,"old":0,"img":"cookware.6.jpg","imgs":["cookware.6.jpg","cookware.6b.jpg","cookware.6c.jpg","cookware.6d.jpg","cookware.6e.jpg","cookware.6f.jpg"],"badge":"SALE","badgeType":"sale","inStock":true},{"id":129,"cat":"cookware","name":"Unique Knife Set","note":"Premium quality — Full knife set","price":2999,"old":0,"img":"cookware.7.jpg","imgs":["cookware.7.jpg","cookware.7b.jpg","cookware.7c.jpg","cookware.7d.jpg","cookware.7e.jpg","cookware.7f.jpg"],"badge":"HOT","badgeType":"hot","inStock":true},{"id":130,"cat":"nets","name":"Double Decker Mosquito Net","note":"Size 4x6 — Colours: Purple, Pink, White and Cream","price":1700,"old":0,"img":"net.6.jpg","imgs":["net.6.jpg","net.6b.jpg","net.6c.jpg","net.6d.jpg","net.6e.jpg","net.6f.jpg"],"badge":"NEW","badgeType":"new","inStock":true},{"id":137,"cat":"duvets","name":"High quality duvet cover set","note":"High quality duvet cover set\n*_1_* duvet cover \n *_1_* bedsheet \n *_2_* pillow cases 👆 \n\n*Size 5*6*","price":2500,"old":0,"img":"duvet 25.jpg","imgs":["duvet 25.jpg","duvet 25b.jpg","duvet 25c.jpg","duvet 25d.jpg","duvet 25e.jpg","duvet 25f.jpg"],"badge":"","badgeType":"","inStock":true},{"id":138,"cat":"duvets","name":"Knot pillow","note":"Size 22cm width — Decorative knot design","price":850,"old":0,"img":"decor.7.jpg","imgs":["decor.7.jpg","decor.7b.jpg","decor.7c.jpg","decor.7d.jpg","decor.7e.jpg","decor.7f.jpg"],"badge":"","badgeType":"","inStock":true}];

/* ── STATE ── */
var cart       = [];
var wishlist   = [];
var payStatus  = '';
var qvProduct  = null;
var recentlyViewed = [];

/* ── CAT LABELS ── */
var CAT_LABELS = {
  all:'All Products', nets:'Mosquito Nets', duvets:'Duvets & Covers',
  kitchenware:'Kitchenware', carpets:'Carpets & Mats', seatcovers:'Seat Covers',
  bath:'Bath & Towels', furniture:'Furniture', kids:'Kids Corner',
  electronics:'Electronics', cookware:'Cookware',
  travel:'Travel & Luggage', decor:'Home Decor'
};

/* ── BUILD CARD ── */
function buildCard(p) {
  var inStock  = p.inStock !== false;
  var badge    = p.badge ? '<span class="badge-tag badge-' + p.badgeType + '">' + p.badge + '</span>' : '';
  var price    = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  var oldPrice = p.old ? '<span style="font-size:11px;color:#bbb;text-decoration:line-through;">KSh ' + p.old.toLocaleString() + '</span>' : '';
  var n        = p.name.replace(/'/g, '').replace(/"/g, '');
  var imgs     = (p.imgs || [p.img]).filter(Boolean).slice(0, 6);
  var waMsg    = encodeURIComponent('Hi Irene! I want to order: ' + p.name + ' - ' + price);

  var thumbs = '';
  if (imgs.length > 1) {
    thumbs = '<div style="display:flex;gap:3px;padding:5px 7px;background:#f9f9f9;border-top:1px solid #eee;">';
    for (var t = 0; t < imgs.length; t++) {
      thumbs += '<img src="' + imgs[t] + '" style="width:28px;height:28px;object-fit:cover;border-radius:3px;cursor:pointer;border:2px solid ' + (t===0?'#1a3d2b':'#eee') + ';" onerror="this.style.display=\'none\'" />';
    }
    thumbs += '</div>';
  }

  var oos = !inStock ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.38);"><span style="background:#e53e3e;color:#fff;font-size:9px;font-weight:700;padding:4px 10px;border-radius:3px;">OUT OF STOCK</span></div>' : '';

  return '<div class="product-card" style="cursor:pointer;" onclick="openQuickView(' + p.id + ')">' +
    '<div class="card-img">' +
      '<img src="' + p.img + '" alt="' + n + '" loading="lazy"' + (!inStock ? ' style="opacity:.45;"' : '') + ' onerror="this.style.display=\'none\';this.parentElement.style.background=\'linear-gradient(135deg,#e8f5ee,#d0e4d0)\';"/>' +
      badge + oos +
    '</div>' +
    thumbs +
    '<div class="card-body">' +
      '<div class="card-location">Kenyas Favourite Store</div>' +
      '<div class="card-name">' + p.name + '</div>' +
      '<div class="card-note">' + p.note + '</div>' +
      '<div class="card-price-row"><span class="card-price">' + price + '</span>' + oldPrice + '</div>' +
      '<div style="display:flex;gap:6px;margin-top:8px;">' +
        '<button class="card-atc" style="flex:1;' + (!inStock ? 'background:#ccc;cursor:not-allowed;' : '') + '"' +
          (inStock ? ' onclick="event.stopPropagation();handleATC(this,' + p.id + ')"' : ' disabled') + '>' +
          '&#128722; ' + (inStock ? 'Add to Cart' : 'Out of Stock') + '</button>' +
        '<a href="https://wa.me/254716060029?text=' + waMsg + '" target="_blank" class="wa-share-btn" onclick="event.stopPropagation();" style="width:38px;min-width:38px;background:#25d366;border-radius:5px;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:16px;">&#128172;</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function handleATC(btn, id) {
  var p = PRODUCTS.find(function(x){ return x.id === id; });
  if (p) addToCart(btn, p.id, p.name, p.cat, p.price, p.img);
}

/* ── RENDER PRODUCTS ── */
function renderProducts(containerId, filter, limit) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var list = filter === 'all' || !filter
    ? PRODUCTS.slice()
    : PRODUCTS.filter(function(p){ return p.cat === filter; });
  if (limit) list = list.slice(0, limit);
  container.innerHTML = list.length
    ? list.map(buildCard).join('')
    : '<p style="text-align:center;color:#6b7280;padding:40px;">No products found.</p>';
}

function renderNewArrivals(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var recent = PRODUCTS.slice().reverse().slice(0, 8);
  container.innerHTML = recent.map(buildCard).join('');
}

/* ── FLASH SALE TIMER ── */
function startFlashSaleTimer() {
  var el = document.getElementById('flash-timer');
  if (!el) return;
  var end = new Date();
  end.setHours(23, 59, 59, 0);
  function update() {
    var now  = new Date();
    var diff = Math.max(0, end - now);
    var h    = Math.floor(diff / 3600000);
    var m    = Math.floor((diff % 3600000) / 60000);
    var s    = Math.floor((diff % 60000) / 1000);
    el.innerHTML =
      '<div class="timer-block"><span class="timer-num">' + String(h).padStart(2,'0') + '</span><span class="timer-label">HRS</span></div>' +
      '<span class="timer-sep">:</span>' +
      '<div class="timer-block"><span class="timer-num">' + String(m).padStart(2,'0') + '</span><span class="timer-label">MIN</span></div>' +
      '<span class="timer-sep">:</span>' +
      '<div class="timer-block"><span class="timer-num">' + String(s).padStart(2,'0') + '</span><span class="timer-label">SEC</span></div>';
  }
  update();
  setInterval(update, 1000);
}

/* ── LOADER ── */
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  if (loader) { loader.classList.add('hide'); }
});

/* ── SCROLL ── */
window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', scrolled > 40);
  var ring   = document.getElementById('progress-ring');
  var circle = document.getElementById('ring-circle');
  var total  = document.documentElement.scrollHeight - window.innerHeight;
  if (ring) ring.classList.toggle('show', scrolled > 300);
  if (circle) circle.style.strokeDashoffset = 113.1 * (1 - (scrolled / Math.max(total, 1)));
});

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ── MOBILE NAV ── */
function toggleMobileNav() {
  var el = document.getElementById('mobile-nav');
  if (el) el.classList.toggle('open');
}
function closeMobileNav() {
  var el = document.getElementById('mobile-nav');
  if (el) el.classList.remove('open');
}

/* ── TOAST ── */
function showToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2800);
}

/* ── COOKIE ── */
function acceptCookie() {
  try { localStorage.setItem('ihc_cookie', '1'); } catch(e) {}
  var el = document.getElementById('cookie-bar');
  if (el) el.classList.remove('show');
}
function declineCookie() {
  var el = document.getElementById('cookie-bar');
  if (el) el.classList.remove('show');
}
setTimeout(function() {
  try { if (!localStorage.getItem('ihc_cookie')) { var cb = document.getElementById('cookie-bar'); if (cb) cb.classList.add('show'); } } catch(e) {}
}, 2500);

/* ── DELIVERY BAR ── */
var FREE_DELIVERY_THRESHOLD = 5000;
function updateDeliveryBar() {
  var total = cart.reduce(function(s, i){ return s + i.price * i.qty; }, 0);
  var bar   = document.getElementById('delivery-fill');
  var msg   = document.getElementById('delivery-msg');
  if (!bar) return;
  var pct   = Math.min(100, (total / FREE_DELIVERY_THRESHOLD) * 100);
  bar.style.width = pct + '%';
  bar.style.background = pct >= 100 ? '#22c55e' : '';
  if (msg) {
    if (pct >= 100) {
      msg.innerHTML = '&#127881; <strong style="color:#22c55e;">FREE delivery unlocked!</strong>';
    } else {
      var rem = (FREE_DELIVERY_THRESHOLD - total).toLocaleString();
      msg.innerHTML = 'Add <strong style="color:var(--green);">KSh ' + rem + '</strong> more for <strong style="color:var(--green);">FREE delivery</strong> &#128666;';
    }
  }
}

/* ── CART ── */
function addToCart(btn, id, name, cat, price, img) {
  if (!price || price <= 0) { showToast('Call for price — order via WhatsApp'); return; }
  var existing = cart.find(function(i){ return i.id === id; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: id, name: name, cat: cat, price: price, img: img, qty: 1 });
  }
  var orig = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = '&#10003; Added!'; btn.classList.add('added'); }
  setTimeout(function(){ if (btn) { btn.innerHTML = orig; btn.classList.remove('added'); } }, 1200);
  updateCartUI();
  showToast('&#128722; Added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(function(i){ return i.id !== id; });
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  var item = cart.find(function(i){ return i.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(function(i){ return i.id !== id; });
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  var count = cart.reduce(function(s, i){ return s + i.qty; }, 0);
  var total = cart.reduce(function(s, i){ return s + i.price * i.qty; }, 0);
  ['cart-badge','cart-badge-bottom'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.textContent = count; el.classList.toggle('show', count > 0); }
  });
  var ct = document.getElementById('cart-total');
  if (ct) ct.textContent = 'KSh ' + total.toLocaleString();
  var cc = document.getElementById('cart-count');
  if (cc) cc.textContent = count + ' item' + (count !== 1 ? 's' : '');
  updateDeliveryBar();
}

function renderCartItems() {
  var wrap = document.getElementById('cart-items');
  if (!wrap) return;
  if (!cart.length) {
    wrap.innerHTML = '<div class="drawer-empty"><div class="drawer-empty-icon">&#128722;</div><p>Your cart is empty</p></div>';
    return;
  }
  wrap.innerHTML = cart.map(function(item) {
    return '<div class="cart-item">' +
      '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '"/></div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">KSh ' + item.price.toLocaleString() + '</div>' +
      '</div>' +
      '<div class="qty-control">' +
        '<button class="qty-btn" onclick="changeQty(' + item.id + ',-1)">-</button>' +
        '<span class="qty-val">' + item.qty + '</span>' +
        '<button class="qty-btn" onclick="changeQty(' + item.id + ',1)">+</button>' +
      '</div>' +
      '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')">&#128465;</button>' +
    '</div>';
  }).join('');
}

function openCart() {
  renderCartItems();
  var d = document.getElementById('cart-drawer');
  var o = document.getElementById('cart-overlay');
  if (d) d.classList.add('open');
  if (o) o.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  var d = document.getElementById('cart-drawer');
  var o = document.getElementById('cart-overlay');
  if (d) d.classList.remove('open');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
}

function selectPayStatus(type) {
  payStatus = type;
  var paid  = document.getElementById('opt-paid');
  var nopay = document.getElementById('opt-nopay');
  if (paid)  paid.className  = 'pay-opt' + (type === 'paid'  ? ' sel-paid'  : '');
  if (nopay) nopay.className = 'pay-opt' + (type === 'nopay' ? ' sel-nopay' : '');
  showToast(type === 'paid' ? '&#10003; Marked as paid' : '&#128181; Pay on delivery');
}

function clearCart() {
  cart = []; payStatus = '';
  var paid  = document.getElementById('opt-paid');
  var nopay = document.getElementById('opt-nopay');
  if (paid)  paid.className  = 'pay-opt';
  if (nopay) nopay.className = 'pay-opt';
  updateCartUI();
  renderCartItems();
}

function checkout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  var total = cart.reduce(function(s, i){ return s + i.price * i.qty; }, 0);
  var lines = cart.map(function(i){ return i.name + ' x' + i.qty + ' - KSh ' + (i.price * i.qty).toLocaleString(); }).join('\n');
  var pay   = payStatus === 'paid' ? 'Already paid via M-Pesa' : 'Pay on Delivery';
  var msg   = 'NEW ORDER - Irene Household Collections\n\n' + lines + '\n\nTotal: KSh ' + total.toLocaleString() + '\nPayment: ' + pay + '\n\nPlease confirm. Thank you!';
  window.open('https://wa.me/254716060029?text=' + encodeURIComponent(msg), '_blank');
}

/* ── WISHLIST ── */
function toggleWishlist(btn, id, name, cat, price, img) {
  var idx = wishlist.findIndex(function(i){ return i.id === id; });
  if (idx !== -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('active'); btn.innerHTML = '&#9825;'; }
    showToast('Removed from wishlist');
  } else {
    wishlist.push({ id: id, name: name, cat: cat, price: price, img: img });
    if (btn) { btn.classList.add('active'); btn.innerHTML = '&#10084;&#65039;'; }
    showToast('&#10084; Saved to wishlist!');
  }
  updateWishlistUI();
}

function updateWishlistUI() {
  var count = wishlist.length;
  ['wl-badge','wl-badge-bottom'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.textContent = count; el.classList.toggle('show', count > 0); }
  });
  var wc = document.getElementById('wl-count');
  if (wc) wc.textContent = count + ' item' + (count !== 1 ? 's' : '');
}

function renderWishlistItems() {
  var wrap = document.getElementById('wl-items');
  if (!wrap) return;
  if (!wishlist.length) {
    wrap.innerHTML = '<div class="drawer-empty"><div class="drawer-empty-icon">&#9825;</div><p>Wishlist is empty</p></div>';
    return;
  }
  wrap.innerHTML = wishlist.map(function(item) {
    var price = item.price > 0 ? 'KSh ' + item.price.toLocaleString() : 'Call for Price';
    return '<div class="cart-item">' +
      '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '"/></div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">' + price + '</div>' +
      '</div>' +
      '<button class="remove-btn" onclick="removeFromWishlist(' + item.id + ')">&#128465;</button>' +
    '</div>';
  }).join('');
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(function(i){ return i.id !== id; });
  updateWishlistUI();
  renderWishlistItems();
}

function openWishlist() {
  renderWishlistItems();
  var d = document.getElementById('wl-drawer');
  var o = document.getElementById('wl-overlay');
  if (d) d.classList.add('open');
  if (o) o.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWishlist() {
  var d = document.getElementById('wl-drawer');
  var o = document.getElementById('wl-overlay');
  if (d) d.classList.remove('open');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── QUICK VIEW ── */
function openQuickView(id) {
  var p = PRODUCTS.find(function(x){ return x.id === id; });
  if (!p) return;
  qvProduct = p;

  if (recentlyViewed.indexOf(id) === -1) recentlyViewed.unshift(id);
  if (recentlyViewed.length > 10) recentlyViewed.pop();

  var price    = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  var imgs     = (p.imgs || [p.img]).filter(Boolean).slice(0, 6);
  var catLabel = CAT_LABELS[p.cat] || p.cat;
  var inWL     = wishlist.some(function(w){ return w.id === p.id; });
  var waMsg    = encodeURIComponent('Hi Irene! I want to order: ' + p.name + ' - ' + price + '. Please confirm availability.');

  /* Remove old modal completely so no duplicates */
  var old = document.getElementById('qv-modal');
  if (old) old.remove();

  /* Build modal from scratch every time */
  var modal = document.createElement('div');
  modal.id = 'qv-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;justify-content:center;opacity:0;transition:opacity .25s;';
  modal.onclick = function(e){ if (e.target === modal) closeQuickView(); };

  /* Sheet */
  var sheet = document.createElement('div');
  sheet.style.cssText = 'width:100%;max-width:520px;background:#fff;border-radius:16px 16px 0 0;overflow:hidden;transform:translateY(100%);transition:transform .3s ease;max-height:90vh;display:flex;flex-direction:column;';

  /* ── HEADER ── */
  var header = document.createElement('div');
  header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px;border-bottom:1px solid #f0f0f0;flex-shrink:0;';
  header.innerHTML =
    '<div>' +
      '<span style="font-size:10px;font-weight:700;color:#1a3d2b;letter-spacing:1px;text-transform:uppercase;background:#e8f5ee;padding:3px 9px;border-radius:20px;">' + catLabel + '</span>' +
    '</div>' +
    '<button onclick="closeQuickView()" style="background:#f0f0f0;border:none;width:30px;height:30px;border-radius:50%;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#333;">&#10005;</button>';
  sheet.appendChild(header);

  /* ── SCROLLABLE BODY ── */
  var body = document.createElement('div');
  body.style.cssText = 'overflow-y:auto;-webkit-overflow-scrolling:touch;flex:1;';

  /* Main image */
  var imgBox = document.createElement('div');
  imgBox.style.cssText = 'position:relative;background:#f5f5f5;';
  var mainImg = document.createElement('img');
  mainImg.id  = 'qv-main-img';
  mainImg.src = imgs[0];
  mainImg.alt = p.name;
  mainImg.style.cssText = 'width:100%;aspect-ratio:1;object-fit:cover;display:block;cursor:zoom-in;';
  mainImg.onclick = function(){ openZoom(this.src); };
  mainImg.onerror = function(){
    this.style.display = 'none';
    imgBox.style.aspectRatio = '1';
    imgBox.style.display = 'flex';
    imgBox.style.alignItems = 'center';
    imgBox.style.justifyContent = 'center';
    imgBox.style.background = '#e8f5ee';
    imgBox.innerHTML += '<span style="font-size:4rem;opacity:.15;">&#128247;</span>';
  };
  imgBox.appendChild(mainImg);

  if (p.badge) {
    var bdgBg = p.badge==='HOT'?'#c8a951':p.badge==='SALE'?'#e53e3e':p.badge==='NEW'?'#1a3d2b':'#7c3aed';
    var bdgCl = p.badge==='HOT'?'#0d1f16':'#fff';
    var bdg   = document.createElement('span');
    bdg.textContent = p.badge;
    bdg.style.cssText = 'position:absolute;top:10px;left:10px;background:'+bdgBg+';color:'+bdgCl+';font-size:9px;font-weight:700;padding:3px 9px;border-radius:3px;';
    imgBox.appendChild(bdg);
  }
  body.appendChild(imgBox);

  /* Thumbnails */
  if (imgs.length > 1) {
    var thumbRow = document.createElement('div');
    thumbRow.style.cssText = 'display:flex;gap:7px;padding:10px 14px;overflow-x:auto;background:#fff;border-bottom:1px solid #f5f5f5;-webkit-overflow-scrolling:touch;scrollbar-width:none;';
    imgs.forEach(function(src, i) {
      var th = document.createElement('img');
      th.src = src;
      th.onerror = function(){ this.style.display='none'; };
      th.className = 'qv-thumb';
      th.style.cssText = 'width:52px;height:52px;flex-shrink:0;object-fit:cover;border-radius:7px;cursor:pointer;border:2.5px solid '+(i===0?'#1a3d2b':'#e0e0e0')+';transition:border-color .15s,transform .15s;';
      th.onclick = (function(s, el){
        return function(){
          mainImg.style.opacity = '0';
          setTimeout(function(){ mainImg.src = s; mainImg.style.opacity = '1'; }, 140);
          thumbRow.querySelectorAll('img').forEach(function(t){ t.style.borderColor = '#e0e0e0'; });
          el.style.borderColor = '#1a3d2b';
        };
      })(src, th);
      thumbRow.appendChild(th);
    });
    body.appendChild(thumbRow);
  }

  /* Info */
  var info = document.createElement('div');
  info.style.cssText = 'padding:14px 16px 24px;';

  /* Name */
  var title = document.createElement('h3');
  title.textContent = p.name;
  title.style.cssText = 'font-family:Cormorant Garamond,serif;font-size:1.35rem;color:#0d1f16;margin-bottom:4px;line-height:1.3;';
  info.appendChild(title);

  /* Description */
  if (p.note) {
    var desc = document.createElement('p');
    desc.textContent = p.note;
    desc.style.cssText = 'font-size:12px;color:#6b7280;line-height:1.6;margin-bottom:10px;';
    info.appendChild(desc);
  }

  /* Price */
  var priceRow = document.createElement('div');
  priceRow.style.cssText = 'display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px;';
  var priceEl = document.createElement('span');
  priceEl.textContent = price;
  priceEl.style.cssText = 'font-family:Cormorant Garamond,serif;font-size:1.75rem;font-weight:700;color:#1a3d2b;';
  priceRow.appendChild(priceEl);
  if (p.old && p.price > 0) {
    var oldEl = document.createElement('span');
    oldEl.textContent = 'KSh ' + p.old.toLocaleString();
    oldEl.style.cssText = 'font-size:12px;color:#bbb;text-decoration:line-through;';
    priceRow.appendChild(oldEl);
    var saveEl = document.createElement('span');
    saveEl.textContent = 'Save KSh ' + (p.old - p.price).toLocaleString();
    saveEl.style.cssText = 'font-size:10px;background:#fff0f0;color:#e53e3e;font-weight:700;padding:2px 7px;border-radius:4px;';
    priceRow.appendChild(saveEl);
  }
  info.appendChild(priceRow);

  /* WA button */
  var waBtn = document.createElement('a');
  waBtn.href = 'https://wa.me/254716060029?text=' + waMsg;
  waBtn.target = '_blank';
  waBtn.rel = 'noopener';
  waBtn.innerHTML = '&#128172; Order on WhatsApp';
  waBtn.style.cssText = 'display:block;width:100%;background:#25d366;color:#fff;padding:13px;font-size:13px;font-weight:700;border-radius:9px;text-align:center;text-decoration:none;margin-bottom:8px;';
  info.appendChild(waBtn);

  /* Cart button */
  var cartBtn = document.createElement('button');
  cartBtn.id = 'qv-cart-btn';
  cartBtn.innerHTML = '&#128722; Add to Cart';
  cartBtn.style.cssText = 'display:block;width:100%;background:#1a3d2b;color:#fff;border:none;padding:12px;font-size:13px;font-weight:700;border-radius:9px;cursor:pointer;margin-bottom:8px;';
  cartBtn.onclick = qvAddToCart;
  info.appendChild(cartBtn);

  /* Wishlist button */
  var wlBtn = document.createElement('button');
  wlBtn.id = 'qv-wl-btn';
  wlBtn.innerHTML = inWL ? '&#10084; Saved to Wishlist' : '&#9825; Save to Wishlist';
  wlBtn.style.cssText = 'display:block;width:100%;background:#fff;color:#1a3d2b;border:1.5px solid #ddd;padding:11px;font-size:12px;font-weight:600;border-radius:9px;cursor:pointer;margin-bottom:14px;';
  wlBtn.onclick = qvToggleWishlist;
  info.appendChild(wlBtn);

  /* Trust */
  var trust = document.createElement('div');
  trust.style.cssText = 'background:#f9f9f9;border-radius:8px;padding:11px 13px;font-size:11.5px;color:#6b7280;display:flex;flex-direction:column;gap:6px;margin-bottom:12px;';
  trust.innerHTML =
    '<span>&#128666; Free delivery on orders over KSh 5,000</span>' +
    '<span>&#128179; Pay via M-Pesa Paybill 522533</span>' +
    '<span>&#10003; Quality verified before delivery</span>';
  info.appendChild(trust);

  /* View full page */
  var fpLink = document.createElement('a');
  fpLink.href = 'product.html?id=' + p.id;
  fpLink.innerHTML = 'View Full Product Page &rarr;';
  fpLink.style.cssText = 'display:block;text-align:center;font-size:12px;color:#1a3d2b;font-weight:600;border:1.5px solid #ddd;padding:10px;border-radius:9px;text-decoration:none;';
  info.appendChild(fpLink);

  body.appendChild(info);
  sheet.appendChild(body);
  modal.appendChild(sheet);
  document.body.appendChild(modal);

  /* Animate in */
  setTimeout(function(){
    modal.style.opacity = '1';
    sheet.style.transform = 'translateY(0)';
  }, 10);
  document.body.style.overflow = 'hidden';

  /* Auto slideshow — only cycles through images that actually loaded */
  if (imgs.length > 1) {
    var userPaused  = false;
    var loadedImgs  = []; /* only confirmed loaded images */
    var slideIdx    = 0;
    var slideTimer  = null;

    /* Pre-check which images actually exist */
    var checked = 0;
    imgs.forEach(function(src, i) {
      var tester   = new Image();
      tester.onload = function(){
        loadedImgs.push({ src: src, idx: i });
        loadedImgs.sort(function(a,b){ return a.idx - b.idx; });
        checked++;
        if (checked === imgs.length) startSlideshow();
      };
      tester.onerror = function(){
        checked++;
        if (checked === imgs.length) startSlideshow();
      };
      tester.src = src;
    });

    function startSlideshow() {
      /* Need at least 2 working images to slideshow */
      if (loadedImgs.length < 2) return;

      slideTimer = setInterval(function(){
        if (userPaused) return;
        if (!document.getElementById('qv-modal')) {
          clearInterval(slideTimer);
          return;
        }

        /* Move to next — wrap back to 0 at end */
        slideIdx = (slideIdx + 1) % loadedImgs.length;
        var newSrc  = loadedImgs[slideIdx].src;
        var origIdx = loadedImgs[slideIdx].idx;
        var mImg    = document.getElementById('qv-main-img');
        if (!mImg) { clearInterval(slideTimer); return; }

        /* Smooth fade transition */
        mImg.style.transition = 'opacity .35s ease';
        mImg.style.opacity    = '0';
        setTimeout(function(){
          mImg.src           = newSrc;
          mImg.style.opacity = '1';
        }, 350);

        /* Sync thumbnail highlight */
        var allThumbs = document.querySelectorAll('#qv-modal .qv-thumb');
        allThumbs.forEach(function(t, i){
          t.style.borderColor = (i === origIdx) ? '#1a3d2b' : '#e0e0e0';
          t.style.transform   = (i === origIdx) ? 'scale(1.08)' : 'scale(1)';
        });

      }, 2500);

      modal._slideTimer = slideTimer;
    }

    /* Pause when user taps a thumbnail */
    var allThumbs = document.querySelectorAll('#qv-modal .qv-thumb');
    allThumbs.forEach(function(th){
      var orig = th.onclick;
      th.onclick = function(){
        userPaused = true;
        if (orig) orig.call(this);
      };
    });
  }
}

function closeQuickView() {
  var modal = document.getElementById('qv-modal');
  if (!modal) return;
  /* Stop slideshow timer */
  if (modal._slideTimer) clearInterval(modal._slideTimer);
  var sheet = modal.querySelector('div');
  if (sheet) sheet.style.transform = 'translateY(100%)';
  modal.style.opacity = '0';
  setTimeout(function(){
    modal.remove();
    document.body.style.overflow = '';
  }, 320);
}


function qvAddToCart() {
  if (!qvProduct) return;
  var btn = document.getElementById('qv-cart-btn');
  addToCart(btn, qvProduct.id, qvProduct.name, qvProduct.cat, qvProduct.price, qvProduct.img);
}

function qvToggleWishlist() {
  if (!qvProduct) return;
  var btn = document.getElementById('qv-wl-btn');
  var inWL = wishlist.some(function(i){ return i.id === qvProduct.id; });
  if (inWL) {
    wishlist = wishlist.filter(function(i){ return i.id !== qvProduct.id; });
    if (btn) btn.innerHTML = '&#9825; Save to Wishlist';
    showToast('Removed from wishlist');
  } else {
    wishlist.push({ id: qvProduct.id, name: qvProduct.name, cat: qvProduct.cat, price: qvProduct.price, img: qvProduct.img });
    if (btn) btn.innerHTML = '&#10084; Saved';
    showToast('&#10084; Saved to wishlist!');
  }
  updateWishlistUI();
}

/* ── ZOOM ── */
function openZoom(src) {
  var ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;z-index:5000;background:rgba(0,0,0,.94);display:flex;align-items:center;justify-content:center;padding:16px;';
  ov.onclick = function(){ ov.remove(); document.body.style.overflow = ''; };
  var img = document.createElement('img');
  img.src = src;
  img.style.cssText = 'max-width:95vw;max-height:90vh;object-fit:contain;border-radius:8px;';
  var cls = document.createElement('button');
  cls.innerHTML = '&#10005;';
  cls.style.cssText = 'position:absolute;top:16px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:38px;height:38px;border-radius:50%;font-size:18px;cursor:pointer;';
  cls.onclick = function(){ ov.remove(); };
  ov.appendChild(img);
  ov.appendChild(cls);
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
}

/* ── COPY VALUE ── */
function copyValue(elemId, btn) {
  var val = document.getElementById(elemId) ? document.getElementById(elemId).textContent : '';
  navigator.clipboard.writeText(val).catch(function(){
    var el = document.createElement('textarea');
    el.value = val; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el);
  });
  if (btn) {
    var orig = btn.textContent;
    btn.textContent = 'Copied!'; btn.classList.add('copied');
    setTimeout(function(){ btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  }
}

/* ── INIT ZOOM (image thumbnails on cards) ── */
function initZoom() {}

/* ── SHARE ── */
function shareOnWhatsApp(name, price, img) {
  var p = price > 0 ? 'KSh ' + price.toLocaleString() : 'Call for Price';
  var msg = 'Hi! Check out ' + name + ' (' + p + ') from Irene Household Collections. irenehousehold.co.ke';
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

/* ── GO TO PRODUCT ── */
function goToProduct(id) {
  window.location = 'product.html?id=' + id;
}

/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', function() {
  startFlashSaleTimer();
  updateCartUI();
  updateWishlistUI();

  // Scroll reveal
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('on');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rev').forEach(function(el) { observer.observe(el); });

  // Cart / wishlist overlay close
  var co = document.getElementById('cart-overlay');
  if (co) co.addEventListener('click', closeCart);
  var wo = document.getElementById('wl-overlay');
  if (wo) wo.addEventListener('click', closeWishlist);
});
