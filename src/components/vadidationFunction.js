
//  Validation Functions For Froms



export function validate(data){
    let hasEmpty = false

    let valueArray = Object.values(data)
    hasEmpty = valueArray.includes("")
    return !hasEmpty
}


export function validateExp(expData){
    let hasEmpty = false
    for(let exp of expData){
        if(Object.values(exp).includes("")){
            hasEmpty = true
            break
        }
    }
    return !hasEmpty
}

export function validateSkills(data){
    return data.includes("")
}