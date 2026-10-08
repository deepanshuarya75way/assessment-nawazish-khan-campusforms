alter table responses  add column if not exists device_id text ;
create unique index if not exists responses_one_per_device on responses (form_id , device_id);
 