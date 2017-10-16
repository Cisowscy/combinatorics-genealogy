# **KOMENDY: [git flow AVH][www:1]** 
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
<table border="1">
    <thead>
        <tr>
            <th rowspan="2"><code></code></th>
            <th scope="col" colspan="13" align="center" valign="middle">PODSTAWOWE ISTOTNE KOMENDY</th>
        </tr>
        <tr>            
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
            <th colspan="14"></th>
        </tr>
    </thead>
    <tbody>        
        <tr> 
        <th scope="row" rowspan="2" align="center" valign="middle">LISTA ODDZIAŁÓW:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix / support&gt; list</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">NOWY ODDZIAŁ:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; start [opcje] &lt;nazwa&gt; [&lt;baza&gt;]</code><br><hr><code>git flow release; start [opcje] &lt;wersja&gt;</code><br><hr><code>git flow &lt;hotfix / support&gt; start [opcje] &lt;wersja&gt; [&lt;baza&gt;]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">Polecenie to tworzy nowy oddział (cechę(feature) lub korektę błędu(bugfix)) domyślnie z oddziału develop (rozwojowego) aczkolwiek można podać inną bazę wyjściową, a także inne opcje które omówię zbiorczo poniżej. Podobnie sprawa ma się do oddziałów (łatki (hotfix), i wsparcia wstecznego (support)) tyle że oddziały są nazywane aktualnym numerem wersji, i domyślnie są tworzone z oddziału produkcyjnego (master / trunk). Natomiast rozpoczynając nowy oddział dopracowania wydania (release) określamy tylko numer wersji.</th>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">ZAKOŃCZ ODDZIAŁ:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; finish [opcje] &lt;nazwa | [prefix]&gt;</code><br><hr><code>git flow &lt;release / hotfix&gt; finish [opcje] &lt;wersja&gt;</code><br><hr><code>git flow release branch [opcje] &lt;wersja&gt;[nazwa]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">Polecenie to zakańcza prace nad oddziałem co w przypadku cechy(feature) i korekty(bugfix) skutkuje złączeniem go z develeop (linią rozwojową), domyślnie, natomiast w przypadku wydania(release) i łatki(hotfix) domyślnie powoduje złączenie z linią produkcyjną (master / trunk).<br> 
Istnieje też jakaś inna opcja zakańczania wydania(release) ale nie rozumiem póki co na czym polega [ Release a branch [&lt;name&gt;], if a name is not given it defaults to the develop branch, and use the given version &lt;version&gt;]
<br>Warto jednak nadmienić że każda komenda zakończenia posiada gro różnorakich opcji dodatkowych, pozwalających dokładnie określić jak ta finalizacja pracy ma przebiegać.</th>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="2" align="center" valign="middle">USUŃ (TEN) ODDZIAŁ:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix&gt; delete [opcje] &lt;nazwa&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="2" align="center" valign="middle">PRZEŁĄCZ NA INNY ODDZIAŁ:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; checkout &lt;nazwa | [prefix]&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">POKAŻ RÓŻNICE ODDZIAŁU:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; diff &lt;nazwa | [prefix]&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">Wyświetla wszystkie zmiany w danym oddziale, które nie są uwzględnione w develop (linii rozwojowej).</th>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="2" align="center" valign="middle">ZMIEŃ NAZWE ODDZIAŁU:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / hotfix&gt; rename &lt;nowa_nazwa&gt; &lt;obecna_nazwa&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">SCALANIE:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; pull &lt;skrót oddziału zdalnego (remote)&gt; [&lt;nazwa&gt;]</code><br><hr><code>git flow &lt;feature / bugfix / release / hotfix / support&gt; rebase [opcje] &lt;nazwa | [prefix]&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">Dwie opcje scalania: pull (fetch+merge) oraz rebase, … </th>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">ŚLEDZENIE ODDZIAŁU:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release&gt; track &lt;nazwa&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">(PL?) Start tracking feature / bugfix / release <name> that is shared on $ORIGIN</th>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="3" align="center" valign="middle">PUBLIKOWANIE ODDZIAŁU:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix&gt; publish &lt;nazwa&gt;</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
        </tr>
        <tr>
            <th colspan="13" align="justify">(PL?) Publish feature / bugfix / release / hotfix branch <name> on $ORIGIN</th>
        </tr>
        <tr>
            <th colspan="14"><br><br></th>
        </tr>
    </tbody>
    </table>
    <table border="1">
    <tfoot>
    <tr>            
            <th scope="col" colspan="14" align="center" valign="middle">DODATKOWE OPCJE DO KOMEND</th>
        </tr>
    <tr>
            <th colspan="14"><br></th>
        </tr>
        <tr>  
            <th scope="row"><code></code></th>          
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
            <th colspan="13"></th>
        </tr>
    <tr>
            <th scope="row" rowspan="17" align="center" valign="middle">POMOC:</th>    
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix / support&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">✓</td>
            <td align="center">✓</td> 
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
    <tr>
            <th colspan="13"></th>
        </tr>
    <tr>
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
        </tr>
    <tr>
            <th colspan="13"></th>
        </tr>
    <tr>
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / hotfix&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
    <tr>
            <th colspan="13"></th>
        </tr>
    <tr>
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
        </tr>
    <tr>
            <th colspan="13"></th>
        </tr>
    <tr>
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
    <tr>
            <th colspan="13"></th>
        </tr>
    <tr>
            <td colspan="13" align="center" valign="middle"><code>git flow &lt;release&gt; [KOMENDA] [-h / help]</code></td>
        </tr>
        <tr>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
        <tr> 
        <th scope="row" rowspan="2" align="center" valign="middle">POKAŻ<br>WIĘCEJ:</th>           <td colspan="13" align="center" valign="middle"><code>git flow &lt;feature / bugfix / release / hotfix / support&gt; [KOMENDA] [-v / verbose]</code><br><hr><code>git flow &lt;feature / bugfix / release / hotfix / support&gt; [KOMENDA] [-h / help] [-v / verbose]</code></td>
        </tr>
        <tr>
            <td align="center">✓</td>
            <td align="center">✓</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
            <td align="center">☐</td>
        </tr>
        <tr>
            <th colspan="14"></th>
        </tr>
    </tfoot>
</table>


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
