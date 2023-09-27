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

export async function createEditCabin(newCabin,id){
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    let query = supabase.from('cabins')

    if(!id)
        query = query
            .insert([{...newCabin,image:imagePath}])

    if(id)
        query = query.update({...newCabin,image:imagePath}).eq('id',id)

    const {data,error} = await query.select().single()

    if(error) {
        console.log(error)
        throw new Error('Erro ao criar cabin')
    }

    if(hasImagePath) return data

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