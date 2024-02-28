class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `













        <div id = "headerplacement">
          
        <nav class="nav-area">
          <div id="topbanner"></div>
          
                    <div class="logoplacement">
                    <a href="home.html">
                        <input type="image" id="logo" src="logoupdated1.png" name="saveForm" class="btTxt submit" id="saveForm" />
                    </a>
                </div>
          
          
          <ul id = "navigationtings">
            
           
            
            <li class = "homebtn" id="r1">
              <a href="home.html">home</a>
            </li>
            
        
        
        
        
            <li class = "secondheaderbtn" id="r1s">
              
              <a href="#" style="border-bottom-left-radius: 0%; border-bottom-right-radius: 0%;">Cases by Topic ᵕ</a>
              <ul id = "casebytopiclayout">
                <li>
                  <a href="cardiohome.html" style="border-radius: 0%; border-radius: 0%;">Cardiology</a>
                  
                </li>
                <li>
                  <a href="#" style="border-radius: 0%;">Respiratory</a>
                </li>
        
                <li>
                  <a href="#" style="border-radius: 0%;">Gastro</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Obs + Gynae</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Paediatrics</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">ENT</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Opthalm</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Derm</a>
                </li>
        
                <li>
                <a href="#" style="border-radius: 0%;">Rheum</a>
                </li>
        
                <li>
                  <a href="#" style="border-radius: 0%;">Neurology</a>
        
                </li>
                
                <li>
                  <a href="#" style="border-radius: 0%;">Orthopaedics</a>
                </li>
        
              </ul>
            </li>
            
            <li class = "thirdheaderbtn" id="r1">
              <a href="#" >About us</a>
            </li>
            
        
            <li class = "fourthheaderbtn" id="r1">
              <a href="#" >Contact us</a>
            </li>
          
        
            
            
        
        
            <li class = "loginbtn">
              <a href="#" >Login</a>
            </li>
            
            <li class = "searchbtn">
              <a href="#" style="font-size: 30px; margin-top: -13px;" >⌕</a>
            </li>
        
            
            
            <li class="mobilenavarea"><a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </li>
        



        
            <div id="myLinks" style="display: none;">
    <a href="home.html">Home</a>
    <a href="#Aboutus">About</a>
    <a href="#Contactus">Contact us</a>
    <a href="homepage.html">Cases by topic ᵕ</a>
    
</div>
            
            
          </ul>
        </center>
        
        </div>
                <div id="bottombanner"></div>
        
        </nav>












        
        `
    }
}






 


class OtherCases extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

        <h2 style="font-family: LTSoul;">Other cases:</h2>
        <div class="scroll-container">
              <div class="image-container">
                <img src="logo.png" alt="Cinque Terre" width="600" height="400">
                <div class="image-caption">Caption for Cinque Terre</div>
            </div>
            <div class="image-container">
                <img src="logo.png" alt="Forest" width="600" height="400">
                <div class="image-caption">Caption for Forest</div>
            </div>
            <div class="image-container">
                <img src="logo.png" alt="Northern Lights" width="600" height="400">
                <div class="image-caption">Caption for Northern Lights</div>
            </div>
            <div class="image-container">
                <img src="logo.png" alt="Mountains" width="600" height="400">
                <div class="image-caption">Caption for Mountains</div>
            </div>
        </div>

        
        `
    }
}







class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `

        <footer>
        <p>Author: Zak Francillon<br>
        <a href="mailto:hege@example.com">hege@example.com</a></p>
      </footer>

        
        `
    }
}







customElements.define('special-header', SpecialHeader)
customElements.define('other-cases', OtherCases)
customElements.define('special-footer', SpecialFooter)




