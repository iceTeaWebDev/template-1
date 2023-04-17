

export async function GET(request: Request) {
    return new Response(JSON.stringify({
        data: {
            _id: "abc",
            name: "BÀN",
            code: [
                "FRP-BA22/FMT",
                "FRP-BA22/A"
            ],
            customer: "FREEDOOM",
            image: "images/image1.png",
            specifications: ["Kích thước tổng thể (2200x 950 x 751) mm"],
            detail: [
                {
                    name: "Step 1",
                    image: "images/image5.jpg",
                    description: ["Vệ sinh sản phẩm.Tháo chân"]
                },
                {
                    name: "Step 2",
                    image: "images/image4.jpg",
                    description: ["Phủ mút chân"]
                },
                {
                    name: "Step 3",
                    image: "images/image7.jpg",
                    description: ["Dán chân"]
                },
                {
                    name: "Step 4",
                    image: "images/image6.jpg",
                    description: ["Phủ mút mặt bàn"]
                },
                {
                    name: "Step 5",
                    image: "images/image9.jpg",
                    description: ["Dán mặt bàn"]
                },
                {
                    name: "Step 6",
                    image: "images/image8.jpg",
                    description: ["Dán 4pcs xốp (10 x 100 x 730) cặp theo chân"]
                },
                {
                    name: "Step 7",
                    image: "images/image11.jpg",
                    description: [
                        "Đặt 2pcs cụm chân lên bàn xoay chiều bas sắt ra ngoài",
                        "Dán 4 pcs xốp (20 x 100 x 730)mm lên chân"
                    ]
                },
                {
                    name: "Step 8",
                    image: "images/image10.jpg",
                    description: ["Đặt 2 pcs xốp (60 x 100 x 600)mm lót chân"]
                },
                {
                    name: "Step 9",
                    image: "images/image13.jpg",
                    description: ["Đặt 2 pcs xốp (100 x 100 x 330)mm chèn chân"]
                },
                {
                    name: "Step 10",
                    image: "images/image12.jpg",
                    description: ["Đặt 4pcs khối xốp (80 x 100 x 190) mm", "Đặt 1 pcs xốp giữa(100 x 650 x 190)mm", "Đặt 1 pcs xốp giữa(100 x 650 x 190)mm", "Quấn PE"]
                },
                {
                    name: "Step 11",
                    image: "images/image15.jpg",
                    description: ["Mặt nóc đặt 1pcs xốp tấm (20 x 700 x 1900)mm", "Cạnh bàn ốp 12 pcs xốp V (20 x 350)mm", "Đặt 4 pcs gốc xốp 20+ gốc giấy"]
                },
                {
                    name: "Step 12",
                    image: "images/image14.jpg",
                    description: ["Mặt nóc đặt 1pcs xốp tấm (20 x 700 x 1900)mm"]
                },
                {
                    name: "Step 13",
                    image: "images/image16.jpg",
                    description: ["Dán thùng"]
                },
            ]
        }
    }))
}
