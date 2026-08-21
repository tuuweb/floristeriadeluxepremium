import { supabase } from "@/integrations/supabase/client";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price_cop: number;
  compare_price_cop: number | null;
  images: string[];
  category_id: string | null;
  is_featured: boolean;
  is_active: boolean;
  stock: number;
  tags: string[];
  sort_order: number;
};

export type OrderItem = {
  product_id: string;
  name: string;
  slug: string;
  image: string;
  qty: number;
  price_cop: number;
};

export type Order = {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  recipient_name: string | null;
  address: string;
  city: string;
  delivery_date: string | null;
  delivery_slot: string | null;
  dedication: string | null;
  notes: string | null;
  items: OrderItem[];
  subtotal_cop: number;
  shipping_cop: number;
  total_cop: number;
  status: string;
  created_at: string;
};

export const categoriesQuery = {
  queryKey: ["categories"],
  queryFn: async (): Promise<Category[]> => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []) as Category[];
  },
};

export const productsQuery = {
  queryKey: ["products"],
  queryFn: async (): Promise<Product[]> => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []) as unknown as Product[];
  },
};

export const settingsQuery = {
  queryKey: ["site_settings"],
  queryFn: async (): Promise<Record<string, string>> => {
    const { data, error } = await supabase.from("site_settings").select("key,value");
    if (error) throw error;
    const map: Record<string, string> = {};
    for (const row of data ?? []) map[row.key as string] = row.value as string;
    return map;
  },
};

export const ordersQuery = {
  queryKey: ["orders"],
  queryFn: async (): Promise<Order[]> => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as unknown as Order[];
  },
};
