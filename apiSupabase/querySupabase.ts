import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://ouwufbiqfyglzhcyfldr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91d3VmYmlxZnlnbHpoY3lmbGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNjU3MzcsImV4cCI6MjAyNDc0MTczN30._dUm4jqs6tYhYX1YCgMG0MgvZPa3sGVt_NRl_0_D_HI"
const supabase = createClient(supabaseUrl, supabaseKey)


const querySupabase = async (
    table: string,
    method: string,
    id: Number | null,
    postData: any
) => {
    let response: any;
    try {
        if (method == "get") {
            const { data, error } = await supabase.from(table).select().eq('id', id)
            if (id) {
                response = data?.at(0) || { error: `${table} not found` };
            } else {
                response = data
            }

        } else if (method == "post") {
            const { data, error } = await supabase.from(table).insert(postData)
            response = data
        } else if (method == "put") {
            const { data, error } = await supabase.from(table).update(postData).eq('id', id)
            response = data
        } else if (method == "delete") {
            const { data, error } = await supabase.from(table).delete().eq('id', id)
            response = data
        }
        
        // console.log(response)
    } catch (error) {
        response = { error: error.response, data: null };
    }
    return response;

};



export default querySupabase;