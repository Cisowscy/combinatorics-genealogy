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
# Moja organizacja pracy z gitem
 ![oddzialy][obrazek:2]


---
 # **Git bash** - czyli co możemy zrobić z git-em i itflow-avh (posiadane oprogramowanie)

 - **git version 2.14.2.windows.3** (konsola)
 - **git flow version 1.11.0 (AVH Edition)** (konsola)
 - GiHub Deskopt Version 1.0.4 (gui)
 - GitKraken version 3.1.1 (gui)
 - Cycligent Version 0.5.2 (gui)
 - Sourcetree Version 2.3.1.0 (gui)

 ## **KOMENDY: [git flow AVH][www:1]** 
([oficjalna dokumentacja][www:2]; [modelu Vincent'a Driessen'a][www:3] i [wprowadzenie do ow, przez Jeff'a Kreeftmeijer'a][www:4])
**Dodatkowe źródła wiedzy:** [sprytna prezentacja][www:5]; [Ściągawka w języku polskim niel'a Kummer'a][www:6]; [wprowadzenie do git-flow Marcina Lewandowskiego][www:7]; [przykłady korzystania z GitFlow][www:8]; [nvie/gitflow][www:9]; [numeracja wersji][www:10]; [narzędzie GitVersion Docs][www:11];
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

## PODSTAWOWE ISTOTNE KOMENDY

<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">LISTA<br>ODDZIAŁÓW:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>list</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; list [∅ / -h / -v / -h -v]</code></td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">NOWY<br>ODDZIAŁ:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>start</code></th>
<td align="center">✓ (1)</td>
<td align="center">✓ (1)</td>
<td align="center">✓ (2)</td>
<td align="center">✓ (3)</td>
<td align="center">✓ (3)</td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; start [opcje] &lt;nazwa&gt; [&lt;baza&gt;]</code><br><hr><code>$ git flow release; start [opcje] &lt;wersja&gt;</code><br><hr><code>$ git flow &lt;KOMENDA&gt; start [opcje] &lt;wersja&gt; [&lt;baza&gt;]</code><hr>Polecenie to tworzy nowy oddział (cechę(feature) lub korektę błędu(bugfix)) domyślnie z oddziału develop (rozwojowego) aczkolwiek można podać inną bazę wyjściową, a także inne opcje które omówię zbiorczo poniżej. Podobnie sprawa ma się do oddziałów (łatki (hotfix), i wsparcia wstecznego (support)) tyle że oddziały są nazywane aktualnym numerem wersji, i domyślnie są tworzone z oddziału produkcyjnego (master / trunk). Natomiast rozpoczynając nowy oddział dopracowania wydania (release) określamy tylko numer wersji.</td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="4" align="center" valign="middle"  scope="row">ZAKOŃCZ<br>ODDZIAŁ:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>finish</code></th>
<td align="center">✓ (1)</td>
<td align="center">✓ (1)</td>
<td align="center">✓ (2)</td>
<td align="center">✓ (2)</td>
<td align="center"></td>
</tr>
<tr>
<th scope="row" align="right"><code>branch</code></th>
<td align="center"></td>
<td align="center"></td>
<td align="center">✓ (3)</td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; finish [opcje] &lt;nazwa | [prefix]&gt;</code><br><hr><code>$ git flow &lt;KOMENDA&gt; finish [opcje] &lt;wersja&gt;</code><br><hr><code>$ git flow release branch [opcje] &lt;wersja&gt; [&lt;nazwa&gt;]</code><hr>Polecenie to zakańcza prace nad oddziałem co w przypadku cechy(feature) i korekty(bugfix) skutkuje złączeniem go z develeop (linią rozwojową), domyślnie, natomiast w przypadku wydania(release) i łatki(hotfix) domyślnie powoduje złączenie z linią produkcyjną (master / trunk).<br> 
Istnieje też jakaś inna opcja zakańczania wydania(release) ale nie rozumiem póki co na czym polega [ Release a branch [&lt;name&gt;], if a name is not given it defaults to the develop branch, and use the given version &lt;version&gt;]
<br>Warto jednak nadmienić że każda komenda zakończenia posiada gro różnorakich opcji dodatkowych, pozwalających dokładnie określić jak ta finalizacja pracy ma przebiegać.</td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">USUŃ<br>(TEN)<br>ODDZIAŁ:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>delete</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; delete [opcje] &lt;nazwa&gt;</code></td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">PRZEŁĄCZ<br>NA INNY<br>ODDZIAŁ:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>checkout</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; checkout &lt;nazwa | [prefix]&gt;</code></td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">POKAŻ<br>RÓŻNICE<br>ODDZIAŁU:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>diff</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; diff &lt;nazwa | [prefix]&gt;</code><hr>Wyświetla wszystkie zmiany w danym oddziale, które nie są uwzględnione w develop (linii rozwojowej).</td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">ZMIEŃ<br>NAZWE<br>ODDZIAŁU:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>rename</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
<td align="center">✓</td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; rename &lt;nowa_nazwa&gt; &lt;obecna_nazwa&gt;</code></td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="4" align="center" valign="middle"  scope="row">SCALANIE:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>pull</code></th>
<td align="center">✓ (1)</td>
<td align="center">✓ (1)</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<th scope="row" align="right"><code>rebase</code></th>
<td align="center">✓ (2)</td>
<td align="center">✓ (2)</td>
<td align="center">✓ (2)</td>
<td align="center">✓ (2)</td>
<td align="center">✓ (2)</td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; pull &lt;skrót oddziału zdalnego (remote)&gt; [&lt;nazwa&gt;]</code><br><hr><code>$ git flow &lt;KOMENDA&gt; rebase [opcje] &lt;nazwa | [prefix]&gt;</code><br><hr>Dwie opcje scalania: pull (fetch+merge) oraz rebase, …</td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">ŚLEDZENIE<br>ODDZIAŁU:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>track/code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; track &lt;nazwa&gt;</code><br><hr>(PL?) Start tracking feature / bugfix / release &lt;name&gt; that is shared on $ORIGIN</td>
</tr>
</table><hr>


<table border="1">
<tr>
<th rowspan="3" align="center" valign="middle"  scope="row">PUBLIKOWANIE<br>ODDZIAŁU:</th>
<th scope="col" scope="row">KOMENDY</th>
<th scope="col"><code>feature</code></th>
<th scope="col"><code>bugfix</code></th>
<th scope="col"><code>release</code></th>
<th scope="col"><code>hotfix</code></th>
<th scope="col"><code>support</code></th>
</tr>
<tr>
<th scope="row" align="right"><code>publish</code></th>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center">✓</td>
<td align="center"></td>
</tr>
<tr>
<td  colspan="6" align="justify"><code>$ git flow &lt;KOMENDA&gt; publish &lt;nazwa&gt;</code><br><hr>(PL?) Publish feature / bugfix / release / hotfix branch &lt;name&gt; on $ORIGIN</td>
</tr>
</table><hr>
<br>

## DODATKOWE OPCJE DO PODSTAWOWYCH KOMEND

<table border="1">
 <thead><tr><th colspan="14" align="left"><h3><b>POMOC DO KOMEND, (ORAZ / LUB WYŚWIETLENIE WIĘCEJ INFORMACJI)</b></h3></th></tr></thead>
    <tbody>
    <tr>  
   <th scope="row" scope="col">KOMENDY</th> 
   <th scope="col"><code>∅</code></th>
   <th scope="col"><code>list</code></th>
   <th scope="col"><code>start</code></th>
   <th scope="col"><code>finish</code></th>
   <th scope="col"><code>branch</code></th>
   <th scope="col"><code>delete</code></th>
   <th scope="col"><code>checkout</code></th>
   <th scope="col"><code>diff</code></th>
   <th scope="col"><code>rename</code></th>
   <th scope="col"><code>pull</code></th>
   <th scope="col"><code>rebase</code></th>
   <th scope="col"><code>track</code></th>
   <th scope="col"><code>publish</code></th>
        </tr>
        <tr>
   <th scope="row" align="right"><code>feature</code></th> 
   <th>✓</th>
   <th>✓ | ✓</th>
   <th>✓</th>
   <th>✓</th>
   <th></th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
        </tr>
        <tr>  
   <th scope="row" align="right"><code>bugfix</code></th> 
   <th>✓</th>
   <th>✓ | ✓</th>
   <th>✓</th>
   <th>✓</th>
   <th></th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
        </tr>
        <tr>  
   <th scope="row" align="right"><code>release</code></th> 
   <th>✓</th>
   <th>✓ | ✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
   <th></th>
   <th></th>
   <th></th>
   <th></th>
   <th>✓</th>
   <th>✓</th>
   <th>✓</th>
        </tr>
        <tr>  
   <th scope="row" align="right"><code>hotfix</code></th> 
   <th>✓</th>
   <th>✓ | ✓</th>
   <th>✓</th>
   <th>✓</th>
   <th></th>
   <th>✓</th>
   <th></th>
   <th></th>
   <th>✓</th>
   <th></th>
   <th>✓</th>
   <th></th>
   <th>✓</th>
        </tr>
        <tr>  
   <th scope="row" align="right"><code>support</code></th> 
   <th>✓</th>
   <th>✓ | ✓</th>
   <th>✓</th>
   <th></th>
   <th></th>
   <th></th>
   <th></th>
   <th></th>
   <th></th>
   <th></th>
   <th>✓</th>
   <th></th>
   <th></th>
        </tr>
    </tbody>
    <tfoot>
    <tr>   
   <th scope="col" colspan="14" align="justify" valign="middle"> <code> $ git flow [KOMENDA V&H] [-h / help]</code> | <code> $ git flow list [-v / verbose]</code> | <code> $ git flow [KOMENDA V&H] [-h / help] [-v / verbose]</code><br><hr><i><b>np.: <code>$ git flow feature finish -h</code></b>, Można też użyć dodakowo opcji <code>[-v / verbose]</code> aby wyświetlić więcej informacji.</i></th>
        </tr>    
    </tfoot>
</table><hr>

<table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>UKAZANIE „CICHYCH” OPERACJI GITA

</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th>✓</th>
                <th>✓</th>
                <th></th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th>✓</th>
                <th>✓</th>
                <th></th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th>  </th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓</th>
                <th>✓</th>
                <th>✓</th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th>  </th>
                <th>✓</th>
                <th>✓</th>
                <th></th>
                <th>✓</th>
                <th></th>
                <th></th>
                <th>✓</th>
                <th></th>
                <th>✓</th>
                <th></th>
                <th>✓</th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    <code> $ git flow [KOMENDA V&H] [inne opcje] --showcommands</code>
                    <br><hr>
                    Pokazuje komendy Gita które wykonują się w tle podczas zlecania komend git flow</i>
                </th>
            </tr>
        </tfoot>
    </table><hr>

<table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>POBIERANIE (fetch)</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th>✓ (1a)</th>
                <th>✓ (2a)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th>✓ (1a)</th>
                <th>✓ (2a)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th>  </th>
                <th>✓ (1b)</th>
                <th>✓ (2b)</th>
                <th>✓ (2c)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th>  </th>
                <th>✓ (1c)</th>
                <th>✓ (2b)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th>✓ (1c)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1a) <code> $ git flow [KOMENDA V] start [inne opcje] [-F / fetch] &lt;nazwa&gt; [&lt;baza&gt;]</code>
                    <br>
                    (1b) <code> $ git flow release start [inne opcje] [-F / fetch] &lt;wersja&gt;</code><br>
                    (1c) <code> $ git flow [KOMENDA V] start [inne opcje] [-F / fetch] &lt;wersja&gt; [&lt;baza&gt;]</code>
                    <br>Pobiera aktualną wersję z „origin” przed wykonaniem operacji lokalnych<br><hr>
                    (2a) <code> $ git flow [KOMENDA V] finish [inne opcje] [-F / fetch] &lt;nazwa | [prefix]&gt;</code><br>
                    (2b) <code> $ git flow [KOMENDA V] finish [inne opcje] [-F / fetch] &lt;wersja&gt;</code><br>
                    (2c) <code> $ git flow release branch [inne opcje] [-F / fetch] &lt;wersja&gt; [&lt;nazwa&gt;]</code>
                    <br>Pobiera aktualną wersję z „origin” przed wykonaniem zakończenia<br>
                </th>
            </tr>
        </tfoot>
    </table><hr> 
    <table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>ZACHOWYWANIE ODDZIAŁÓW PODCZAS ZAKAŃCZANIA NAD NIMI PRACY</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1) <code> $ git flow [KOMENDA V] finish [inne opcje] [TE OPCJE] &lt;nazwa | prefix&gt;</code><br>
                    (2) <code> $ git flow [KOMENDA V] finish [inne opcje] [TE OPCJE] &lt;wersja&gt;</code>
                    <br>
                    <b>[TE OPCJE] : </b><br>
                    <code>[-k / keep]</code>  Zatrzymaj oddział po zakończeniu nad nim pracy.<br>
                    <code>keeplocal</code>  Zatrzymaj oddział lokalny.<br>
                    <code>keepremote</code>  Zatrzymaj oddział zdalny.<br>
                </th>
            </tr>
        </tfoot>
    </table><hr>
    <table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>OZNACZANIE</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th>  </th>
                <th></th>
                <th>✓ (1)<br><hr>✓ (3)</th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th>  </th>
                <th></th>
                <th>✓ (1)<br><hr>✓ (3)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1) <code> $ git flow [KOMENDA V] finish [inne opcje] [TE OPCJE] &lt;wersja&gt;</code>
                    <br>
                    (2) <code> $ git flow release branch [inne opcje] [TE OPCJE]  &lt;wersja&gt; | &lt;nazwa&gt;</code><br>
                    <b>[TE OPCJE] : </b><br>
                    <code>[-m / --message]</code> use the given tag message<br>
                    <code>[-f / --messagefile]</code> use the contents of the given file as a tag message<br>
                    <code>[-n / notag]</code> don't tag this release<br>
                    <code>[-s / sign]</code> sign the release tag cryptographically<br>
                    <code>[-u / --signingkey]</code> use the given GPG-key for the digital signature (implies -s)
                    <br><hr>
                    (3) <code> $ git flow [KOMENDA V] finish [inne opcje] [-T / --tagname] &lt;wersja&gt;</code><br>
                    use given tag name<br>
                </th>
            </tr>
        </tfoot>
    </table><hr>
    <table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>USUWANIE</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1) <code> $ git flow [KOMENDA V] finish [inne opcje] [-D / force_delete] &lt;nazwa | prefix&gt;</code>
                    <br>
                    force delete feature / bugfix branch after finish<br><hr>
                    (2) <code> $ git flow [KOMENDA V] delete [inne opcje] [TE OPCJE]  &lt;nazwa&gt;</code><br>
                    <b>[TE OPCJE] : </b><br>
                    <code>[-r / remote]</code> delete remote branch<br>
                    <code>[-f / force]</code> force deletion<br>
                </th>
            </tr>
        </tfoot>
    </table><hr>
    <table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>WYPYCHANIE</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1/3/4)</th>
                <th>✓ (2)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1) <code> $ git flow [KOMENDA V] finish [inne opcje] [-p / push] &lt;wersja&gt;</code><br>
                    (2) <code> $ git flow release branch [inne opcje] [-p / push] &lt;wersja&gt; [&lt;nazwaa&gt;]</code>
                    <br>
                    push the production and develop branch to origin after performing the finish.<br><hr>
                    (3) <code> $ git flow release finish [inne opcje] pushdevelop &lt;wersja&gt;</code>
                    <br>
                    push the develop branch to origin after performing the finish.<br><hr>
                    (4) <code> $ git flow release finish [inne opcje] pushproduction &lt;wersja&gt;</code>
                    <br>
                    push the production branch to origin after performing the finish.<br>
                </th>
            </tr>
        </tfoot>
    </table><hr>
    <table border="1">
        <thead>
            <tr>
                <th colspan="13" align="left">
                    <h3>
                        <b>OPCJE ODNOŚNIE SCALANIA</b>
                    </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row" scope="col">KOMENDY</th>                
                <th scope="col">
                    <code>list</code>
                </th>
                <th scope="col">
                    <code>start</code>
                </th>
                <th scope="col">
                    <code>finish</code>
                </th>
                <th scope="col">
                    <code>branch</code>
                </th>
                <th scope="col">
                    <code>delete</code>
                </th>
                <th scope="col">
                    <code>checkout</code>
                </th>
                <th scope="col">
                    <code>diff</code>
                </th>
                <th scope="col">
                    <code>rename</code>
                </th>
                <th scope="col">
                    <code>pull</code>
                </th>
                <th scope="col">
                    <code>rebase</code>
                </th>
                <th scope="col">
                    <code>track</code>
                </th>
                <th scope="col">
                    <code>publish</code>
                </th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>feature</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (3/5)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (4)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>bugfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (3/5)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (4)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>release</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1/2/5)</th>
                <th>✓ (5)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (4)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>hotfix</code>
                </th>
                <th></th>
                <th></th>
                <th>✓ (1)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (4)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th scope="row" align="right">
                    <code>support</code>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>✓ (4)</th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col" colspan="13" align="justify" valign="middle">
                    (1a) <code> $ git flow release finish [inne opcje] [-b / nobackmerge] &lt;wersja&gt;</code><br>
                    (1b) <code> $ git flow hotfix finish [inne opcje] [-b / nobackmerge] &lt;wersja&gt; [&lt;nazwa&gt;]</code><br>
                    don't back-merge master, or tag if applicable, in develop<br><hr>
                    (2) <code> $ git flow release finish [inne opcje] --ff-master &lt;wersja&gt;</code><br>
                    Fast forward master branch if possible<br><hr>
                    (3a) <code> $ git flow [KOMENDA V] finish [inne opcje] --no-ff &lt;nazwa | prefix&gt;</code><br>
                    never fast-forward during the merge<br><hr>
                    (3a) <code> $ git flow [KOMENDA V] finish [inne opcje] [-r / rebase] &lt;nazwa | prefix&gt;</code><br>
                    rebase instead of merge<br><hr>
                    (3b) <code> $ git flow [KOMENDA V] finish [inne opcje] [-p / preserve-merges] &lt;nazwa | prefix&gt;</code><br>
                    preserve merges while rebasing<br><hr>
                    (4a) <code> $ git flow [KOMENDA V] rebase [inne opcje] [-p / preserve-merges] &lt;nazwa | prefix&gt;</code><br>
                    preserve merges<br><hr>
                    (4b) <code> $ git flow [KOMENDA V] rebase [inne opcje] [-i / interactive] &lt;nazwa | prefix&gt;</code><br>
                    do an interactive rebase<br><hr>
                    (5a) <code> $ git flow [KOMENDA V] finish [inne opcje] [-S / squash] &lt;nazwa | prefix&gt;</code><br>
                    (5b) <code> $ git flow release finish [inne opcje] [-S / squash] &lt;wersja&gt;</code><br>
                    (5b) <code> $ git flow release branch [inne opcje] [-S / squash] &lt;wersja&gt; [&lt;nazwa&gt;]</code><br>
                    squash feature / bugfix / release during merge
                    <br>
                </th>
            </tr>
        </tfoot>
    </table><hr>

# **[POWRÓT DO WPRWADZENIA][skorowidz:0]** 

[skorowidz:0]: ./Home.md 

[obrazek:1]: ./Images/git_environment.png  "Środowisko Gita"
[obrazek:2]: ./Images/git_working_space.png  "Moja organizacja pracy z Gitem (1)"


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

