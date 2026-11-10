import {
  Bot, Sparkles, ScrollText, Database, Handshake, SearchCheck, Flag, Gauge,
  Frown, ShieldCheck, Megaphone, Users, GraduationCap, MapPin, type LucideIcon,
} from "lucide-react";
import type { Icone } from "@/data";

export const ICONES: Record<Icone, LucideIcon> = {
  ia: Bot,
  generative: Sparkles,
  charte: ScrollText,
  data: Database,
  dialogue: Handshake,
  qualite: SearchCheck,
  souverainete: Flag,
  mesure: Gauge,
  sentiment: Frown,
  controle: ShieldCheck,
  information: Megaphone,
  humain: Users,
  formation: GraduationCap,
  proximite: MapPin,
};
