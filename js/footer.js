const createFooter=()=>{
    let footer= document.querySelector('footer');

    footer.innerHTML= `
    <div class="footer-content">
            <img src="img/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="categeory">
                    <li class="categeory-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">swetshirt</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trouser</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="categeory">
                    <li class="categeory-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">swetshirt</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trouser</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
                
        </div>
        <p class="footer-title">About company</p>
        <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, placeat tenetur officia, a illum ut id magnam repudiandae quaerat odio quae, consectetur beatae facilis natus iste. Et totam autem magnam!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quasi saepe quas delectus cumque illum nulla. Voluptatem debitis deleniti doloremque consequatur ratione autem at aut soluta ea hic, quo vitae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto aspernatur possimus quaerat nostrum modi exercitationem, excepturi inventore aliquam amet atque nisi sed dolorum eos a neque non error veritatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto aspernatur possimus quaerat nostrum modi exercitationem, excepturi inventore aliquam amet atque nisi sed dolorum eos a neque non error veritatis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto aspernatur possimus quaerat nostrum modi exercitationem, excepturi inventore aliquam amet atque nisi sed dolorum eos a neque non error veritatis!
        </p>  
        
        <p class="info-1">supportEmail- Help@Clothing.com, Customersupport@Clothing.com</p>  
        <p class="info-1">Telephone - 1800 123 854</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & service</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best apparel site</p>
    ; `
}

createFooter();