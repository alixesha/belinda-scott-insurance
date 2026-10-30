<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Business info (name, phone, address) lives in `src/lib/site.ts` — single source for header/footer/contact pages. Why: avoids inconsistent contact details across pages.
- Entrance animations: text slides in from the left, images from the right, using `<Reveal direction="left|right">` from `src/components/Reveal.tsx`. Why: explicit user requirement for the whole site.
- No backend/Cloud: contact is phone-first (`tel:` CTAs). Why: user asked to stay within budget; site is fully static.
