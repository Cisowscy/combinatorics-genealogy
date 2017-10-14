# Git

>    Ciężko by mówić o jakimkolwiek ułatwieniu pracy, bez wstępnego prawidłowego skonfigurowania przestrzeni roboczej, (oczywiście każdemu co innego może być dobrym, aczkolwiek przedstawię moje upodobania, a nuż komuś coś się przyda a i może mnie za pewien czas gdy co nieco nie będzie już świeże - ku pamięci).
>
> ![Środowisko Gita][obrazek:1]
>
> ### Teraz przedstawię w krokach co zrobiłem
>
> > 1.  Utworzyłem nowy repozytorium na github-ie, a następnie zainicjowałem pierwszy **`git commit`** dodając w nim plik **`README.md`**, a także zaczątek modułu stanowiącego dokumentacje **`wiki`**.
> > 2.  Utworzyłem na komputerze folder **`REPOZYTORIA`**, następnie uruchomiłem w nim konsole i sklonowałem to repozytorium za pomocą komendy **`git clone https://github.com/Cisowscy/combinatorics-genealogy.git`**, następnie udałem się do nowego katalogu **`combinatorics-genealogy`** komendą **`cd combinatorics-genealogy`**.
> > 3.  Teraz przystąpiłem do zasadniczej konfiguracji mojej przestrzeni roboczej 
> > 3.1. Utworzenie nowej gałęzi bez wstecznej historii dla środowiska roboczego projektu
> > ```bash
> >  $ git symbolic-ref HEAD refs/heads/trunk
> >  $ rm .git/index
> >  $ git clean -fdx
> >  $ echo "init branch to GitFlow" > README.md
> >  $ git add .
> >  $ git commit -a -m "init branch to GitFlow"
> >  $ git push origin trunk
> > ```
> > 3.2. Dołączenie podgałęzi z dokumentacją do gałęzi roboczej w folderze Docs
> > ```bash
> >  $ git remote add -f Docs https://github.com/Cisowscy/combinatorics-genealogy.wiki.git
> >  $ git merge -s ours --no-commit Docs/master 
> >  # opcjonalne gdy wystąpi błąd "fatal: refusing to merge unrelated histories"
> >  $ git merge -s ours --no-commit Docs/master --allow-unrelated-histories
> >  $ git read-tree --prefix=Docs/ -u Docs/master
> >  $ git commit -m "Github wiki subtree merged in Docs/"
> >  $ git pull -s subtree Docs master
> >  $ git push origin trunk
> > ```
> > 3.3. Inicjacja pracy z gitflow-AVH,
> > ```bash
> >  $ git branch develop
> >  $ git flow init
> >  # Which branch should be used for bringing forth production releases?
> >  # Branch name for production releases: [master]
> >  $ trunk
> >  # Branch name for "next release" development: [develop]
> >  $ develop
> >  # How to name your supporting branch prefixes?
> >  # Feature branches? [feature/]
> >  $ feature/
> >  # Bugfix branches? [bugfix/]
> >  $ bugfix/
> >  # Release branches? [release/]
> >  $ release/
> >  # Hotfix branches? [hotfix/]
> >  $ hotfix/
> >  # Support branches? [support/]
> >  $ support/ 
> >  # Version tag prefix? []
> >  $ v
> >  # Hooks and filters directory?
> >  $ ./.git/hooks
> > ```
> > 3.4. utworzenie gałęzi do publikacji strony www
> > ```bash
> >  $ git symbolic-ref HEAD refs/heads/gh-pages
> >  $ rm .git/index
> >  $ git clean -fdx
> >  $ echo "My GitHub Page" > index.html
> >  $ git add .
> >  $ git commit -a -m "First pages commit"
> >  $ git push origin gh-pages
> > ```
> > 3.5. Teraz można rozpocząć pracę, zmieńmy galo na develop
> > ```bash
> >  $ git checkout develop
> >  # a teraz utwórzmy nowe "feature" na rzecz utworzenia tejże właśnie dokumentacji
> >  $ git flow feature start inicjacja-dokumentacji
> >  # gdy praca nad tym rozwinięciem zostanie ukończona należy użyć komendy
> >  # git flow feature finish inicjacja-dokumentacji
> > ```



[obrazek:1]: ./Images/git_environment.png  "Środowisko Gita"


