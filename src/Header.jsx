import stathmosImage from './assets/stathmos-new.png';

function Header(){

    return(
        <header>
            <div className="flex items-center justify-center">
                <img src={stathmosImage}  alt="Example"  className="w-72 h-auto rounded text-center mx-auto" />
           </div>
        </header>
    );
}

export default Header