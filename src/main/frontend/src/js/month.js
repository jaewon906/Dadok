export const month = () =>{
    const month_plus_2 = new Date().getMonth() + 2;

    if(month_plus_2 ===13){
        return 1;
    }
    return month_plus_2;
}