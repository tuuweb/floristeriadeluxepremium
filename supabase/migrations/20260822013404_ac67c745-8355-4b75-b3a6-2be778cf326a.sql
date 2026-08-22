insert into public.site_settings (key, value) values
 ('address','Carrera 43 #79-226, Local 1, Barranquilla, Colombia'),
 ('city','Barranquilla'),
 ('email','floristeriadeluxe@gmail.com'),
 ('instagram','https://instagram.com/floristeriadeluxe'),
 ('instagram_handle','@floristeriadeluxe'),
 ('maps_url','https://maps.app.goo.gl/iP9B2jxw3JVnETTe7'),
 ('whatsapp_number','573006301123'),
 ('hours_weekdays','Lunes a sábado 8:00 – 20:00'),
 ('hours_sunday','Domingo 9:00 – 18:00'),
 ('hours_whatsapp','Pedidos por WhatsApp 24/7')
on conflict (key) do update set value = excluded.value;