   
   var array1=[
       {
           name:'Sneakers',
           pic:'https://assets.reebok.com/images/w_280,h_280,f_auto,q_auto:sensitive/c25a58159b12445f80abad9f012b84b5_9366/nanoflex-tr-mens-training-shoes.jpg',
           brand:'Reebok',
           price:5500
       },
       {
        name:'Basketball shoes',
        pic:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4d1ac202b20d47a6ad28ad7c01677f21_9366/forum-low-trae-young-shoes.jpg',
        brand:'Adidas',
        price:2800
    },
    {
        name:'Vapor Edge Pro',
        pic:'https://classic.cdn.media.amplience.net/i/hibbett/0V338_0036_right2?fmt=webp&w=580&h=580&bg=rgb(255,255,255)&img404=404&v=1',
        brand:'Nike',
        price:3400
    },
    {
        name:'Sneakers',
        pic:'https://www.fila.de/out/pictures/generated/product/1/250_250_100/fila_ray_tracer_men_white_black_red_1716382_1158.jpg',
        brand:'Fila',
        price:4700
    },
    {
        name:'Running Shoes',
        pic:'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e941871d985a47fc9ff5ab1c000fb764_9366/zigwild-trail-6-womens-shoes.jpg',
        brand:'Reebok',
        price:6200
    },
    {
        name:'Sambarose Athletic Shoes',
        pic:'https://i.ebayimg.com/thumbs/images/g/nSkAAOSw0l5hAtWi/s-l300.jpg',
        brand:'Adidas',
        price:3600
    },
    {
        name:'Casual Shoes',
        pic:'https://media.kohlsimg.com/is/image/kohls/5005024_Gray_Fog?wid=240&hei=240&op_sharpen=1',
        brand:'Nike',
        price:5300
    },
    {
        name:'Lucy Sneakers',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98EjdjxutjarcmwRAdRWyUbigv7uhNEG_vY0DXhhoW9O8dsho8wwBzk3kwD16KQ9_paI&usqp=CAU',
        brand:'Fila',
        price:4200
    },
    {
        name:'Toddler Shoes',
        pic:'https://assets.reebok.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e61102c149f345cc95c6ad32012fe0e8_9366/peppa-pig-weebok-clasp-shoes---toddler.jpg',
        brand:'Reebok',
        price:1800
    },{
        name:'Kids Boots',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0ExxGjjHv4veIMNNJt77WhQGPci62B8srQ&usqp=CAU',
        brand:'Adidas',
        price:4400
    },{
        name:'Sport Shoes',
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR0szhXknDnQbSkMNAsfb6kK-0DjzH2E_gg&usqp=CAU',
        brand:'Nike',
        price:2300
    },
    {
        name:'Sporty Sneakers',
        pic:'https://www.fila.de/out/pictures/generated/product/1/250_250_100/fila_disruptor_f_kids_1400608_1245.jpg',
        brand:'Fila',
        price:3500
    }
       
   ]
   
   const display=()=>{
   if(array1.length>0)
   {
       span1.innerText=array1[0].name;
       image1.src=array1[0].pic;
       para1.innerText=array1[0].brand;
       price1.innerText="Price: Rs."+ array1[0].price;
       span2.innerText=array1[1].name;
       image2.src=array1[1].pic;
       para2.innerText=array1[1].brand;
       price2.innerText="Price: Rs."+array1[1].price;
       span3.innerText=array1[2].name;
       image3.src=array1[2].pic;
       para3.innerText=array1[2].brand;
       price3.innerText="Price: Rs."+array1[2].price;
       span4.innerText=array1[3].name;
       image4.src=array1[3].pic;
       para4.innerText=array1[3].brand;
       price4.innerText="Price: Rs."+array1[3].price;
       span5.innerText=array1[4].name;
       image5.src=array1[4].pic;
       para5.innerText=array1[4].brand;
       price5.innerText="Price: Rs."+array1[4].price;
       span6.innerText=array1[5].name;
       image6.src=array1[5].pic;
       para6.innerText=array1[5].brand;
       price6.innerText="Price: Rs."+array1[5].price;
       span7.innerText=array1[6].name;
       image7.src=array1[6].pic;
       para7.innerText=array1[6].brand;
       price7.innerText="Price: Rs."+array1[6].price;
       span8.innerText=array1[7].name;
       image8.src=array1[7].pic;
       para8.innerText=array1[7].brand;
       price8.innerText="Price: Rs."+array1[7].price;
       span9.innerText=array1[8].name;
       image9.src=array1[8].pic;
       para9.innerText=array1[8].brand;
       price9.innerText="Price: Rs."+array1[8].price;
       span10.innerText=array1[9].name;
       image10.src=array1[9].pic;
       para10.innerText=array1[9].brand;
       price10.innerText="Price: Rs."+array1[9].price;
       span11.innerText=array1[10].name;
       image11.src=array1[10].pic;
       para11.innerText=array1[10].brand;
       price11.innerText="Price: Rs."+array1[10].price;
       span12.innerText=array1[11].name;
       image12.src=array1[11].pic;
       para12.innerText=array1[11].brand;
       price12.innerText="Price: Rs."+array1[11].price;

   }
   }
   display();
   
   sort1.addEventListener('click',function()
{
    var i, j, min_idx;
 
   
    for (i = 0; i < 3; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < 4; j++)
        if (array1[j].price < array1[min_idx].price)
           min_idx = j;
            var temp = array1[min_idx].name;
            var a=array1[min_idx].pic;
            var b=array1[min_idx].brand;
            var c=array1[min_idx].price;
            array1[min_idx].name=array1[i].name;
            array1[min_idx].pic=array1[i].pic;
            array1[min_idx].brand=array1[i].brand;
            array1[min_idx].price=array1[i].price;
            array1[i].name=temp;
            array1[i].pic=a;
            array1[i].brand=b;
            array1[i].price=c;
        
           
    }
      display();
    
} );

sort2.addEventListener('click',function()
{
    var i, j, min_idx;
 
   
    for (i = 4; i < 7; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < 8; j++)
        if (array1[j].price < array1[min_idx].price)
           min_idx = j;
            var temp = array1[min_idx].name;
            var a=array1[min_idx].pic;
            var b=array1[min_idx].brand;
            var c=array1[min_idx].price;
            array1[min_idx].name=array1[i].name;
            array1[min_idx].pic=array1[i].pic;
            array1[min_idx].brand=array1[i].brand;
            array1[min_idx].price=array1[i].price;
            array1[i].name=temp;
            array1[i].pic=a;
            array1[i].brand=b;
            array1[i].price=c;
        
           
    }
    
    display();
} );

sort3.addEventListener('click',function ()
{
    var i, j, min_idx;
 
   
    for (i = 8; i < 11 ; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < 12; j++)
        if (array1[j].price < array1[min_idx].price)
           min_idx = j;
            var temp = array1[min_idx].name;
            var a=array1[min_idx].pic;
            var b=array1[min_idx].brand;
            var c=array1[min_idx].price;
            array1[min_idx].name=array1[i].name;
            array1[min_idx].pic=array1[i].pic;
            array1[min_idx].brand=array1[i].brand;
            array1[min_idx].price=array1[i].price;
            array1[i].name=temp;
            array1[i].pic=a;
            array1[i].brand=b;
            array1[i].price=c;
        
           
    }
    
    display();
} );
window.addEventListener('scroll', function()
      {
    var reveals = document.querySelectorAll('.reveal');
      for( var i = 0;i< reveals.length;i++)
      {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 175;
    if(revealtop < windowheight - revealpoint)
    {
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
      }
});

