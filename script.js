class Calculator{
    constructor(currentOperandText,previousOperandText){
        this.previousOperandText=previousOperandText;
        this.currentOperandText=currentOperandText;
        this.clear()
    }

    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined

    }
    delete(){

    }
    appendNumber(number){
        if(number==='.'&&this.currentOperand.includes('.'))return
        this.currentOperand=this.currentOperand.toString()+number.toString()

    }
    updateDisplay(){
        this.currentOperandText.innerText=this.currentOperand

    }
    chooseOperation(){

    }
    operate(){
         
    }
}






const numberBtn=document.querySelectorAll('.number')
const operatorBtn=document.querySelectorAll('.operator')
const equalBtn=document.querySelector('equal')
const deleteBtn=document.querySelector('delete')
const allClearBtn=document.querySelector('all-clear ')
const currentOperandText=document.querySelector('.current-operand')
const previousOperandText=document.querySelector('.previous-operand')

const calculator=new Calculator(currentOperandText,previousOperandText)

numberBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})