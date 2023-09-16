import supabase, { supabaseUrl } from "./supabase"

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

export async function createCabin(newCabin){
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    const { data, error } = await supabase
    .from('cabins')
    .insert([{...newCabin,image:imagePath}])
    .select() 

    if(error) {
        console.log(error)
        throw new Error('Erro ao criar cabin')
    }

    const { error:storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)

    if(storageError){
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)
        console.log(storageError)
        throw new Error('Erro ao criar image')
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