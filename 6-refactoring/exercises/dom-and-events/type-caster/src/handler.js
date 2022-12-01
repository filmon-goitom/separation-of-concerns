import { typeCaster } from './util';

export const castTheValue = (event) => {
    const form = event.target.form;
    const intendedType = form.type.value;
    const stringToCast = form.value.value;

    
    const theResult = typeCaster(intendedType , stringToCast)

    document.getElementById('casted-value').innertext = theResult;

    
    
};
