 // import { noteActions } from './notes-slice'

// export const fetchNotes = () => {
//     return async (dispatch: any) => {
//         const fetchData = async () => {
//             const response = await fetch(
//               "https://react-http-528d4-default-rtdb.firebaseio.com/cart.json"
//             );
      
//             if (!response.ok) {
//               throw new Error("Could not fetch cart data!");
//             }
      
//             const data = await response.json();
      
//             return data;
//           }
//           try {
//             const cartData = await fetchData();
//             dispatch(cartActions.replaceCart(cartData))
      
//           } catch (error) {
//             dispatch(
//               uiActions.showNotification({
//                 status: "error",
//                 title: "Error!",
//                 message: "Fetching cart data failed!",
//               })
//             );
//           }
//     }
// }