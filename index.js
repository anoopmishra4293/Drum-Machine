'use strict';

const element = React.createElement;


class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        audios: [
            {id:0, 
            aid: "Q", 
            src:"https://www.soundjay.com/button/sounds/button-1.mp3", 
            keyword:"flash, button, game, multimedia"},
            {id:1, 
            aid: "W", 
            src:"https://www.soundjay.com/button/sounds/button-2.mp3", 
            keyword:"up and down, drop, fly, fall, rotate, stop"},
            {id:2, 
            aid: "E", 
            src:"https://www.soundjay.com/button/sounds/button-3.mp3", 
            keyword:"switch, button, quick, menu"},
            {id:3, 
            aid: "A", 
            src:"https://www.soundjay.com/button/sounds/button-4.mp3", 
            keyword:"game, error, alert, fall, drop"},
            {id:4, 
            aid: "S", 
            src:"https://www.soundjay.com/button/sounds/button-5.mp3", 
            keyword:"pop-up, window, menu, maximize, roll over"},
            {id:5, 
            aid: "D", 
            src:"https://www.soundjay.com/button/sounds/button-6.mp3", 
            keyword:"multimedia, click, menu, next"},
            {id:6, 
            aid: "Z", 
            src:"https://www.soundjay.com/button/sounds/button-7.mp3", 
            keyword:"fast, roll over, menu"},
            {id:7, 
            aid: "X", 
            src:"https://www.soundjay.com/button/sounds/button-8.mp3", 
            keyword:"pop-up, multimedia, window, notification, notice"},
            {id:8, 
            aid: "C", 
            src:"https://www.soundjay.com/button/sounds/button-09.mp3", 
            keyword:"fast, button, chat, text, messaging"}],

        keymap : {KeyQ:0, KeyW:1, KeyE:2, KeyA:3, KeyS:4, KeyD:5, KeyZ:6, KeyX:7, KeyC:8},

        currentId : -1

    }
  } 

  buttonclick(id){
    document.getElementById(this.state.audios[id].aid).play()
    this.setState ({
        currentId : id
    })
  }



  render() {
    window.addEventListener('keydown', (event) => {
        if (event.code in this.state.keymap){
            let id = this.state.keymap[event.code]
            document.getElementById(this.state.audios[id].aid).play()
            this.setState({
                currentId : id
            })
        }

      });
    
    return  element('div', {id:"drum-machine", style: {textAlign:'center'}},
                element('p',{id:"display"},`${this.state.currentId==-1?"":this.state.audios[this.state.currentId].keyword}`), 
                
               this.state.audios.map(item => element('button',{key:`${item.id}`,id:`${item.id}`, className:"drum-pad", onClick: this.buttonclick.bind(this,item.id)},`${item.aid}`,
                      element('audio',{id:`${item.aid}`, className:"clip",src:`${item.src}`}))))
        
  }
}

const domContainer = document.getElementById('root')
ReactDOM.render(element(InputField), domContainer);