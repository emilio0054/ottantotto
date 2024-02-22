

import  i18n  from "i18next";
import LanguageDetecor from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n
   .use(LanguageDetecor)
   .use(initReactI18next)
   .init({
    debug:true,
    fallbackLng:"es",     // default language    
    lng:"es",
    resources:{
        
        // About page translation in spanish
        es:{
        translation:{
       AboutTitle: " SOBRE NOSOTROS",
      AboutParagraph:"  Nuestra pizzería nace de la pasión por la cocina italiana y el deseo para compartir su auténtico sabor con el público. Nos complace Te invitamos a nuestro restaurante, situado cerca de la Sagrada Familia. Nuestro El objetivo es brindarle una experiencia culinaria excepcional, garantizando un servicio impecable y atención especializada. Disfruta de un perfecto mezcla de la autenticidad de la cocina italiana y un ambiente familiar y ambiente acogedor.",
     
      // testimonial component translation spanish

      testimonialTitle:"Que dicen nuestros clientes",
      testimonialC1: "¡La mejor pizza de todas! Arturo, el dueño, es muy acogedor y atento. Es la segunda vez que venimos y siempre nos hace sentir muy especiales. ¡Definitivamente regresaré otra vez!",

      testimonialC2:"   Recomendable al 100%. Me comí una pizza Piamonte de lo másexquisita. La masa fina y le acompaña una cremosa superficie de queso, setas y trufa. Una delicia. Me la recomendaron ahí, y handado en el clavo! Gracias!! El servicio muy atento y agradable. Un local bonito, de lo más acogedor y íntimo. Volveré sin duda!",
     
      testimonialC3:" Hicimos una parada aquí para disfrutar un poco de Italia en Barcelona. El servicio fue muy personalizado y la comida excelente. Lo recomiendo mucho si buscas una alternativa a la cocina local.",


  // photoGrid component translation in spanish
  photogridTitle:" NUESTRAS PIZZAS",
  secondpizzatittle:"Desde las clásicas Marinara y Margarita hasta creaciones inspiradas en diferentes regiones de Italia, cada pizza ofrece una experiencia culinaria única.",
  ingredients1:"Tomate, muzzarella, salami picante de calabria, olivas negras",
  ingredients2:"Muzzarella, scamorza (queso ahumado), alcachofas, mortadella, parmesano",
  ingredients3:"Tomate, muzzarella. jamón curado, albahaca fresca",
  ingredients4:"Muzzarella, patatas, pesto hecho en casa",

  ingredients5:"Tomate, muzzarella, champiñones, alcachofas, jamon cocido, olivas negras",
  ingredients6:"Tomate, muzzarella, abhaca freca",

  ingredients7:"Muzzarella, queso taleggio, setas porcini, trufa deshidratada",
  ingredients8:"Tomate, burrata, albahca fresca",

  ingredients9:"Tomate, muzzarella, atún, cebolla, olivas negras, oregano",
  ingredients10:"Tomate, muzzarella, finocchiona (fiambre toscano de cerdo con semillas de hinojo)",


   // contact component translation in spanish
   firstLinetittle:" RESERVAS Y PEDIDOS",
   secondtLinetittle:" HAZ TU RESERVA CON TAN SOLO UN CLICK",
   thirdtLinetittle:" Lunes a Viernes",
   forthLinetittle:"*Reservas se deben de hacer con 24 horas de anticipo.",
   fifthtLinetittle:" Teléfono",
   sixthLinetittle:" Lunes a Viernes",
   seventhLinetittle:" Ubicación",
   eighthLinetittle:" Enviar Correo!",
   ninthLinetittle:"Confirmaremos tu reserva o pedido tan pronto verifiquemos disponibilidad.",
   tenthLinetittle:"Si la reserva o el pedido no está confirmado, no será válido.",
  

   // footer component translation in spanish
      footerTitle1:"INFORMACIÓN",
      footerTitle2:"HORARIOS DE APERTURA",
      footerTime:"MIERCOLES a DOMINGO",

      footerTitle3:"SECCIONES",
      footerTitle3C1:"Inicio",
      footerTitle3C2:"Reservas y pedidos",
      footerTitle3C3:"Pizzas",
      footerTitle3C4:"Sobre nosotros",
    
      footerpolicy:"POLÍTICAS",
      footerPrivicy:"Privacidad",
      footerCookies:"Cookies",



       // NavBar component translation in spanish
       NavINICIO:" INICIO",
       NavRESERVAS:"RESERVAS",
        NavMENU:" MENU",
        NavPIZZAS:" PIZZAS",
        NavSOBRENOSOTROS:"SOBRE NOSOTROS",

        }
        },





// About page translation in English
        en:{
            translation:{
            AboutTitle: "ABOUT US",
            AboutParagraph:"Our pizzeria is born from the passion for Italian cuisine and the desire to share its authentic flavor with the public. We are pleased to invite you to our restaurant, located near the Sagrada Familia. Our goal is to provide you with an exceptional culinary experience, guaranteeing impeccable service and specialized attention. Enjoy a perfect mix of the authenticity of Italian cuisine and a family atmosphere and cozy atmosphere.",

             // testimonial component translation in English

      testimonialTitle:"What do our customers say",
        testimonialC1: "  Best pizza ever! Arturo, the owner, is so welcoming and caring. This is the second time we come and he always makes us feel so special. Will definitely come back again!",
     
        testimonialC2:"100% recommended. I ate a most exquisite Piedmont pizza. The thin dough is accompanied by a creamy surface of cheese, mushrooms and truffle. A delight. They recommended it to me there, and it was spot on! Thank you!! Very attentive and pleasant service. A beautiful place, very cozy and intimate. I will return without a doubt!",

        testimonialC3:" We made a stop here to enjoy a little taste of Italy in Barcelona. The service was very personal, and the food was excellent. I  highly recommend it if you're looking for an alternative to local cuisine.",

       
        // photoGrid component translation in English

        photogridTitle:" OUR PIZZAS",
        secondpizzatittle:"From the classic Marinara and Margherita to creations inspired by different regions of Italy, each pizza offers a unique culinary experience.",
        ingredients1:"Tomato, mozzarella, spicy Calabrian salami, black olives",
        ingredients2:"Mozzarella, scamorza (smoked cheese), artichokes, mortadella, parmesan",
        ingredients3:"Tomato, mozzarella. cured ham, fresh basil",
        ingredients4:"Mozzarella, potatoes, homemade pesto",
        ingredients5:"Tomato, mozzarella, mushrooms, artichokes, cooked ham, black olives",
        ingredients6:"Tomato, mozzarella, fresh abhaca",

        ingredients7:"Mozzarella, taleggio cheese, porcini mushrooms, dried truffle",
        ingredients8:"Tomato, burrata, fresh basil",

        ingredients9:"Tomato, mozzarella, tuna, onion, black olives, oregano",
        ingredients10:"Tomato, mozzarella, filocchiona (Tuscan pork cold cuts with fennel seeds)",


        
        // contact component translation in English
        firstLinetittle:" RESERVATIONS AND ORDERS",
        secondtLinetittle:" MAKE YOUR RESERVATION WITH JUST ONE CLICK",
        thirdtLinetittle:" Monday to Friday",
        forthLinetittle:"*Reservations must be made 24 hours in advance.",
        fifthtLinetittle:"Phone",
        sixthLinetittle:" Monday to Friday",
        seventhLinetittle:"Location",
        eighthLinetittle:" Send mail!",
        ninthLinetittle:"We will confirm your reservation or order as soon as we verify availability.",
        tenthLinetittle:"If the reservation or order is not confirmed, it will not be valid.",
       


        // footer component translation in English
      footerTitle1:"INFORMATION",
      footerTitle2:"OPENING TIMES",
      footerTime:"WEDNESDAY to SUNDAY",
      
      footerTitle3:"SECTIONS",
      footerTitle3C1:"Start",
      footerTitle3C2:"Reservations and orders",
      footerTitle3C3:"Pizzas",
      footerTitle3C4:"About us",
     
      footerpolicy:"POLICIES",
      footerPrivicy:"Privacy",
      footerCookies:"cookies",


         // NavBar component translation in English
         NavINICIO:" START",
        NavRESERVAS:"BOOKINGS",
         NavMENU:" MENU",
         NavPIZZAS:" PIZZA",
         NavSOBRENOSOTROS:"ABOUT US",
        
        } 

        },

  
     




  //You can translate other languages here...
       

    }
  })
export default i18n;