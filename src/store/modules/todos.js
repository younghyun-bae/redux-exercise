//추가
const INSERT = 'todos/INSERT'
//삭제
const REMOVE  = 'todos/REMOVE'
//수정
const TOGGLE  = 'todos/TOGGLE'
//입력
const CHANGE_INPUT  = 'todos/CHANGE_INPUT'

//액션 내보내기
export const insert  = ( text )  => ({type:INSERT , text })
export const remove  = ( id )  => ({type:REMOVE , id })
export const toggle  = ( id )  => ({type:TOGGLE, id })
export const changeInput  = ( text )  => ({type:CHANGE_INPUT, text })

//리듀서
let no = 5
const initialState  = {
    text :'',
    todos:[
        {id:1, text:'종강입니다.' , isChecked:false },
        {id:2, text:'운동하기' , isChecked:false },
        {id:3, text:'저녁먹기.' , isChecked:true },
        {id:4, text:'친구만나기.' , isChecked:false },
    ]
}

const reducer = ( state = initialState , action ) => {
    switch( action.type  ) {
        case INSERT:
            return {
                ...state ,
                todos:[...state.todos , {id:no++, text:action.text , isChecked:false}]
            }
        case REMOVE:
            return {
                ...state ,
                todos : state.todos.filter( todo => todo.id !== action.id )
            }   
        case TOGGLE:
            return {
                ...state ,
                todos: state.todos.map( todo => todo.id === action.id ? 
                    {...todo, isChecked: !todo.isChecked }:todo)
            }     
        case CHANGE_INPUT:
            return {
                ...state ,
                text : action.text 
            }   
        default:
            return state 
    }

}
export default reducer