
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://afrfocueiuicvbqpglzz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcmZvY3VlaXVpY3ZicXBnbHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MjY1MDIsImV4cCI6MjAxMDEwMjUwMn0.mA7iaVnjp7caSVeSaPNHKhczPZgPCNGs9Hyf_vxVc74"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase