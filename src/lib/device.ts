import { Idiqlat } from "next/font/google";

const KEY = 'campusforms-device-v1';

export function getDeviceId():string {
  try {
    let id = localStorage.getItem(KEY);
    if (!id || !/^[0-9a-f-]{36}$/.test(id)){
      id = crypto.randomUUID();
      localStorage.setItem(KEY, id);
    }
    return id 
  } catch { 
    return crypto .randomUUID();
  }
}