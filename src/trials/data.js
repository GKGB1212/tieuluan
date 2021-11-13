const DATA = [
    {
        id:1,
        title:'Nhà quận 1',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:2,
        title:'Nhà quận 2',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:3,
        title:'Nhà quận 3',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:4,
        title:'Nhà quận 4',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:5,
        title:'Nhà quận 5',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },{
        id:6,
        title:'Nhà quận 6',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:7,
        title:'Nhà quận 7',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:8,
        title:'Nhà quận 8',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:9,
        title:'Nhà quận 9',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:10,
        title:'Nhà quận 10',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:111,
        title:'Nhà quận 1',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:2111,
        title:'Nhà quận 2',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:311,
        title:'Nhà quận 3',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:411,
        title:'Nhà quận 4',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:511,
        title:'Nhà quận 5',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },{
        id:611,
        title:'Nhà quận 6',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:111,
        title:'Nhà quận 7',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:81,
        title:'Nhà quận 8',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:91,
        title:'Nhà quận 9',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    },
    {
        id:101,
        title:'Nhà quận 10',
        imageUrl:'https://nha.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FIGfCmT84bCSsh3257QEUbYTjamTw7YlQGV6adkuj6Ec%2Fpreset%3Aview%2Fplain%2Fa54bfa35902351545129dde4a37dfbfd-2738077454261855040.jpg&w=2048&q=75',
        price:"3.3 tỷ",

    }
    ];
  
  export default DATA;
  