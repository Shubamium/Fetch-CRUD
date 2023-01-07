 
export default function useLogging(val){
    console.log('value: '+ val);
    const triggerAnother = ()=>{
        console.log('value: '+ val);
    }
    return [val, triggerAnother];
}