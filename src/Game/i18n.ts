// Boy Next Door i18n — zh / en.
type Locale = 'zh' | 'en';
const STORAGE_KEY = 'bnd_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': 'look out the window',
    'btn.onceMore': 'watch again',
    'hotspot.cup': 'coffee cup',
    'hotspot.ring': 'wedding ring',
    'hotspot.glasses': 'reading glasses',
    'hotspot.towel': 'kitchen towel',
    'hotspot.reflection': 'her reflection',
    'hotspot.showtime': 'he turns',
    'sub.cup': "I haven't moved in twenty minutes.",
    'sub.ring': 'I should put it back on.',
    'sub.glasses': "Banana bread. I'll bake banana bread tomorrow.",
    'sub.towel': 'If Mark comes home now—',
    'sub.reflection': 'When did you become this?',
  },
  zh: {
    'hint.firstTap': '从窗户里看出去',
    'btn.onceMore': '再看一遍',
    'hotspot.cup': '咖啡杯',
    'hotspot.ring': '婚戒',
    'hotspot.glasses': '老花眼镜',
    'hotspot.towel': '厨房毛巾',
    'hotspot.reflection': '玻璃里的倒影',
    'hotspot.showtime': '他转过身',
    'sub.cup': '我已经二十分钟没动过了。',
    'sub.ring': '我应该把它戴回去。',
    'sub.glasses': '香蕉面包。明天我就做。',
    'sub.towel': '如果 Mark 这时候回来——',
    'sub.reflection': '你什么时候变成这样的?',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}
export function getLocale(): Locale { return LOCALE; }
