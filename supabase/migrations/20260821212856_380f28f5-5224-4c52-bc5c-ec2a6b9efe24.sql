DROP POLICY "categories public read" ON public.categories;
CREATE POLICY "categories anon read active" ON public.categories FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "categories auth read" ON public.categories FOR SELECT TO authenticated USING (is_active = true OR public.has_role(auth.uid(),'admin'));

DROP POLICY "products public read" ON public.products;
CREATE POLICY "products anon read active" ON public.products FOR SELECT TO anon USING (is_active = true);
CREATE POLICY "products auth read" ON public.products FOR SELECT TO authenticated USING (is_active = true OR public.has_role(auth.uid(),'admin'));

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;