import supabase from "./supabase"

export async function getCabins(){
    const { data, error } = await supabase
    .from('cabins')
    .select('*')

    if(error) {
        console.log(error)
        throw new Error('Cabins deu BO')
    }

    return data
}

export async function createCabin(id){

    const { data, error } = await supabase
    .from('cabins')
    .insert([id])
    .select() 

    if(error) {
        console.log(error)
        throw new Error('Erro ao criar cabin')
    }

    return data
    
    }

export async function deleteCabin(id){

const { data,error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

    if(error) {
        console.log(error)
        throw new Error('Cabins delete deu BO')
    }

    return data

}