# Git

>    Ciężko by mówić o jakimkolwiek ułatwieniu pracy, bez wstępnego prawidłowego skonfigurowania przestrzeni roboczej, (oczywiście każdemu co innego może być dobrym, aczkolwiek przedstawię moje upodobania, a nuż komuś coś się przyda a i może mnie za pewien czas gdy co nieco nie będzie już świeże - ku pamięci).
>
> ![Środowisko Gita][obrazek:1]
>
> ## Teraz przedstawię w krokach co zrobiłem
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
> > 3.4. Utworzenie gałęzi do publikacji strony www - Także bez wstecznej historii
> > ```bash
> >  $ git symbolic-ref HEAD refs/heads/gh-pages
> >  $ rm .git/index
> >  $ git clean -fdx
> >  $ echo "My GitHub Page" > index.html
> >  $ git add .
> >  $ git commit -a -m "First pages commit"
> >  $ git push origin gh-pages
> > ```
> > 3.5. Teraz można rozpocząć pracę, zmieńmy gałąź na develop
> > ```bash
> >  $ git checkout develop
> >  # a teraz utwórzmy nowe "feature" na rzecz utworzenia tejże właśnie dokumentacji
> >  $ git flow feature start inicjacja-dokumentacji
> >  # gdy praca nad tym rozwinięciem zostanie ukończona należy użyć komendy
> >  # git flow feature finish inicjacja-dokumentacji
> > ```
>
> ## **Git bash** - czyli co możemy zrobić z git-em i gitflow-avh (posiadane oprogramowanie)
>
> - **git version 2.14.2.windows.3** (konsola)
> - **git flow version 1.11.0 (AVH Edition)** (konsola)
> - GiHub Deskopt Version 1.0.4 (gui)
> - GitKraken version 3.1.1 (gui)
> - Cycligent Version 0.5.2 (gui)
> - Sourcetree Version 2.3.1.0 (gui)
>
> ### **KOMENDY: [git flow AVH][www:1]** 
> ([oficjalna dokumentacja][www:2]; [modelu Vincent'a Driessen'a][www:3] i [wprowadzenie do flow, przez Jeff'a Kreeftmeijer'a][www:4])
> **Dodatkowe źródła wiedzy:** [sprytna prezentacja][www:5]; [Ściągawka w języku polskim Daniel'a Kummer'a][www:6]; [wprowadzenie do git-flow Marcina Lewandowskiego][www:7]; [Przykłady korzystania z GitFlow][www:8]; [nvie/gitflow][www:9]; [numeracja wersji][www:10]; [Narzędzie GitVersion Docs][www:11];
> >
> > 1.0. Informacja o podstawowowych komendach:
> > ```bash
> >  # Initialize a new git repo with support for the branching model.
> >  $ git flow init
> >  # Manage your feature branches.
> >  $ git flow feature help
> >  # Manage your bugfix branches.
> >  $ git flow bugfix help
> >  # Manage your release branches.
> >  $ git flow release help
> >  # Manage your hotfix branches.
> >  $ git flow hotfix help
> >  # Manage your support branches.
> >  $ git flow support help
> >  # Shows version information.
> >  $ git flow version
> >  # Manage your git-flow configuration.
> >  $ git flow config help
> >  # Show log deviating from base branch.
> >  $ git flow log help
> > ```
> >
> > 1.1. [Inicjalizacja][www:12] - (Proces ten został omówiony powyżej na przykładzie tworzenia > mojego obszaru roboczego)
> >
> > 1.2. [**Cecha / feature**][www:13]
> 
> 
> 
> 


[obrazek:1]: ./Images/git_environment.png  "Środowisko Gita"
[www:1]: https://github.com/petervanderdoes/gitflow-avh  "git-flow (AVH Edition) projekt"
[www:2]: https://github.com/petervanderdoes/gitflow-avh/wiki  "git-flow (AVH Edition) wiki"
[www:3]: http://nvie.com/posts/a-successful-git-branching-model/ "model flow Vincent'a Driessen'a"
[www:4]: https://jeffkreeftmeijer.com/git-flow/ "wprowadzenie do flow, przez Jeff'a Kreeftmeijer'a"
[www:5]: https://www.slideshare.net/GoAtlassian/creative-branching-models-for-multiple-release-streams "Creative Branching Models for Multiple Release Streams"
[www:6]: https://danielkummer.github.io/git-flow-cheatsheet/index.pl_PL.html
[www:7]: http://www.czterytygodnie.pl/jak-zarzadzac-galeziami-git-flow/
[www:8]: https://gitversion.readthedocs.io/en/latest/git-branching-strategies/gitflow-examples/#to-updatecontribute "Przykłady korzystania z GitFlow"
[www:9]: https://github.com/nvie/gitflow
[www:10]: https://ustwo.com/blog/branching-strategies-with-git/ "numeracja wersji"
[www:11]: http://gitversion.readthedocs.io/en/latest/#gitversion-docs "Narzędzie GitVersion Docs"
[www:12]: https://github.com/petervanderdoes/gitflow-avh/wiki/Reference:-git-flow-init
[www:13]: https://github.com/petervanderdoes/gitflow-avh/wiki/Reference:-git-flow-feature "Cecha / feature"

