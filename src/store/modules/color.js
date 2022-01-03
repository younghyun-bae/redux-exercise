//1. 액션생성  , 파이명/액션명 -> 여러개의 리듀서를 만들면 액션명 겹칠수있다 
const PINK = 'color/PINK'
const HOTPINK = 'color/HOTPINK'
const TOMATO = 'color/TOMATO'
const ORANGE  = 'color/ORANGE'

//2. 액션내보내기 - dispatch({type: 액션명}) -> dispatch( 함수() )
//dispatch({type: 액션명}) -> dispatch( pink() )
export const pink = () => ({type:PINK})
export const hotpink = () => ({type:HOTPINK})
export const tomato = () => ({type:TOMATO})
export const orange = () => ({type:ORANGE})

//3. 리듀서만들기 ( 순수함수 )
const initialState = { color: 'skyblue' }
const reducer = ( state = initialState , action  )  => {
    switch( action.type ) {
        case PINK:
            return {
                color: 'pink'
            }
        case HOTPINK:
            return {
                color:'hotpink'
            }   
        case TOMATO:
            return {
                color:'tomato'
            }   
        case ORANGE:
            return {
                color:'orange'
            }   
        default:
            return state        
    }
}
export default reducer