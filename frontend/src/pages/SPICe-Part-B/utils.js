

export function reducer(state, action) {
    switch (action.type) {
       
        case "update-step1-fields":
            return {
                ...state,
                step1:{
                    ...state.step1,
                    [action.payload.field]:[action.payload.value]
                }
            }
        default:
            break;
    }
}


export const initialState = {
    step1: {
        AOA: false,
        Number_of_Articles: "",
        Details_articles: "table",
        Company_is: "checkbox",
        // 3A Capital structure of the company
        Total_authorized:"",
        Total_classified :"",
        Total_subscribed:"",
        Total_unclassified:"" ,
        // 3A(i) Equity share capital
        Number_classes:"",
        // TableData1:[[ headerInput,{input01,input02}, {input10,input11}],],

    },
    step2: {},
}