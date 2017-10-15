# **KOMENDY: [git flow AVH][www:1]** 
([oficjalna dokumentacja][www:2]; [modelu Vincent'a Driessen'a][www:3] i [wprowadzenie do ow, przez Jeff'a Kreeftmeijer'a][www:4])
**Dodatkowe źródła wiedzy:** [sprytna prezentacja][www:5]; [Ściągawka w języku polskim niel'a Kummer'a][www:6]; [wprowadzenie do git-flow Marcina Lewandowskiego][www:7]; rzykłady korzystania z GitFlow][www:8]; [nvie/gitflow][www:9]; [numeracja wersji][www:10]; arzędzie GitVersion Docs][www:11];
>
> ## Informacja o podstawowowych komendach:
> ```bash
>  # Initialize a new git repo with support for the branching model.
>  $ git flow init
>  # Manage your feature branches.
>  $ git flow feature help
>  # Manage your bugfix branches.
>  $ git flow bugfix help
>  # Manage your release branches.
>  $ git flow release help
>  # Manage your hotfix branches.
>  $ git flow hotfix help
>  # Manage your support branches.
>  $ git flow support help
>  # Shows version information.
>  $ git flow version
>  # Manage your git-flow configuration.
>  $ git flow config help
>  # Show log deviating from base branch.
>  $ git flow log help
> ```


---------------------------------------------------------------
 Kolumna       Wyrównana                              do prawej
 wyśrodkowana  do lewej
-------------- ------------ -----------------------------------
`r E(zmienna)`     2            `r Q(zmienna, 1, 4)`

`r N(zmienna)`        10         komórka, której zawartość
                                 może zajmować wiele linii
                                 zarówno w szablonie raportu,
                                 jak i w wygenerowanym raporcie
---------------------------------------------------------------



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
