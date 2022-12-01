/**
 *
 */
export const typeCaster = (intendedType, stringToCast) => {
    let newValue;
    if(stringToCast === 'string'){
        newValue = String(intendedType);
    }else if(stringToCast === 'boolean'){
        newValue = Boolean(intendedType)
    }else if(stringToCast === 'number'){
        newValue = Number(intendedType)
    }
    return newValue
}    