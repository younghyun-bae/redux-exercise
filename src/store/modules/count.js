//1. 액션생성
const INCREMENT  = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

//2. 액션 내보내기
export const increment  = ( cnt )  => ({type:INCREMENT, cnt })
export const decrement  = ( cnt )  => ({type:DECREMENT , cnt })
export const reset  = ()  => ({type:RESET})

//3. 리듀서 만들기
const initialState = { num :  1}
const reducer = ( state = initialState , action )  => {
    switch( action.type ){
        case INCREMENT:
            return {
                num : state.num + action.cnt  
            }
        case DECREMENT:
            return {
                num : state.num - action.cnt 
            }  
        case RESET:
            return {
                num : 0
            }   
        default:
            return state        
    }
}
export default reducer