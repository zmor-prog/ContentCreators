// Setup SupaBase database backend connection
import {createClient} from '@supabase/supabase-js';
const URL='ProjectURL';
const API='Key';
export const supabase=createClient(URl,API);