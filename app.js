let name = "Gulsah atalan";

console.log("***CASE***");

console.log("camelCase=> "+v.camelCase(name));
console.log("capitalize=> " + v.capitalize(name));
console.log("decapitalize=> " + v.decapitalize(name));
console.log("kebabcase=> " + v.kebabCase(name));
console.log("lowercase=> " + v.lowerCase(name));
console.log("uppercase=> " + v.upperCase(name));
console.log("snakecase=> " + v.snakeCase(name));
console.log("swapcase=> " + v.swapCase(name));
console.log("titlecase=> " + v.titleCase(name));

console.log("***CHOP***");

console.log("charAt 3=> "+v.charAt(name,3))
console.log("codePointAt 3=> "+v.codePointAt(name,3))
console.log("graphemeAt 3=> "+v.graphemeAt(name,3))
console.log("last 2=> "+v.last(name,2))
console.log("first 3=> "+v.first(name,3))
console.log("prune 9=> "+v.prune(name,9))
console.log("prune 4=> "+v.prune(name,4))
console.log("slice 3=> "+v.slice(name,3))
console.log("slice -3=> "+v.slice(name,-3))
console.log("slice 2,5=> "+v.slice(name,2,5))
console.log("substr 3=> "+v.substr(name,3))
console.log("substr 3,2=> "+v.substr(name,3,2))
console.log("substring 3=> "+v.substring(name,3))
console.log("substring 3,6=> "+v.substring(name,3,6))
console.log("truncate 5=> "+v.truncate(name,5))
console.log("truncate 5,**=> "+v.truncate(name,5,`**`))

console.log("***COUNT***");


let newNames="gul,gulsah,ayse bayram"

console.log("count name => "+v.count(newNames))
console.log(newNames)
console.log("countGraphemes => "+v.countGraphemes(newNames))
console.log("countSubstrings gul => "+v.countSubstrings(newNames,`gul`))
console.log("countSubstrings GUL => "+v.countSubstrings(newNames,`GUL`))


console.log("countWhere newNames=> "+v.countWhere("a",newNames))     ///OLMADI



console.log("countWords newNames => "+v.countWords(newNames))

console.log("***ESCAPE HTML***");

let escapeCaracters=`"< > & ' " "`

console.log("escapeHTML=> "+v.escapeHtml('<p>escape HTML</p>'))
console.log("escapeHTML OLMADAN=> "+'<p>escape HTML</p>')
let regularExpressionCharacters= `- [ ] / { } ( ) * + ? . \ ^ $ |`
console.log("escapeRegExp=> "+v.escapeRegExp('(hours)[minutes]{seconds}'))
console.log("escapeRegExp OLMADAN=> "+'(hours)[minutes]{seconds}')

v.unescapeHtml()
console.log("unescapeHTML=> "+v.unescapeHtml('&lt;p&gt;wonderful world&lt;/p&gt;'))
console.log("unescapeHTML OLMADAN=> "+`'&lt;p&gt;wonderful world&lt;/p&gt;'`)




console.log("***INDEX***");

console.log("indexOf a in name=> "+v.indexOf(name,"a"))
console.log("indexOf z in name=> "+v.indexOf(name,"z"))

console.log("lastIndexOf a in name=> "+v.lastIndexOf(name,"a"))
console.log("lastIndexOf z in name=> "+v.lastIndexOf(name,"z"))

console.log("search a in name=> "+v.search(name,"a"))
console.log("search z in name=> "+v.search(name,"z"))


console.log("***MANIPULATE***");
 
console.log("insert (name,z,13) => "+v.insert(name,"z",13))
console.log("insert (name,-eklendi,13=> "+v.insert(name,"-eklendi",13))
 
console.log("latinise Καλημέρα=> "+v.latinise(`Καλημέρα`))
console.log("pad (hello ,6)=> "+v.pad(`hello`,6))
console.log("pad (hello,9 **)=> "+v.pad(`hello`,9,`**`))

console.log("padLeft=> "+v.padLeft(`hello`,9,`**`))

console.log("padRight=> "+v.padRight(`hello`,9,`**`))

console.log("repeat hello 3=> "+v.repeat(`hello`,3))
console.log("repeat hello 0=> "+v.repeat(`hello`,0))

console.log("replace hello ell &=> "+v.replace(`hello`,`ell`,`&`))
console.log("replaceAll hello-world ,l,- => "+v.replaceAll(`hello-World`,`l`,`-`))
console.log("reverse hello=> "+v.reverse(`hello`))
console.log("reverseGrapheme 𝌆 hello mañana=> "+v.reverseGrapheme('𝌆 hello mañana'))
console.log("slugify Καλημέρα=> "+v.slugify(`Καλημέρα`))

console.log("splice name 0 ,3=> "+v.splice(name,0,3))
console.log("splice name 0 ,4,hello=> "+v.splice(name,0,4,"hello"))
console.log("splice name -2 ,4,hello=> "+v.splice(name,-2,4,"hello"))
console.log("tr hello h-*,l-no => "+v.tr(`hello`,{
    'h': '*',
    'l': 'no'}))

 console.log("trim    hello    => "+v.trim(`  hello   `))  
 console.log("trim  -- hello-- ,- => "+v.trim(` -- hello--   `,`-`)) 

 console.log("trimLeft     hello     => "+v.trimLeft(`  hello `))  
 console.log("trimLeft  --hello--,-=> "+v.trimLeft(`--hello--`,`-`)) 

 console.log("trimRight hello    => "+v.trimRight(`hello   `))  
 console.log("trimRight  --hello-- ,- => "+v.trimRight(`--hello--`,`-`)) 
 console.log("wordWrap Hello world width=5 => "+v.wordWrap('Hello world', {
    width: 7
  }))
  let list='Wonderful world'
  console.log("wordWrap Hello world width=5  cut=true=> "+v.wordWrap(list, {
    width: 4,
    cut: true
  }))

console.log("wordWrap"+v.wordWrap(list, {
    width: 4,
    newLine: '<br/>',
    indent: '__'
  }))


console.log("***QUERY***");


console.log("endsWidth list ,world => "+v.endsWith(list, 'world'))
console.log("endsWidth list hello => "+v.endsWith(list, 'hello'))

console.log("includes list world => "+v.includes(list, 'world'))
console.log("includes list w 11 => "+v.includes(list, 'w',11))

console.log("matches list world=> "+v.matches(list, 'world'))      
console.log("matches list k => "+v.matches(list, 'k'))

console.log("isAlpha  WonderfulWorld => "+v.isAlpha('WonderfulWorld'))
console.log("isAlpha Wonderful -World => "+v.isAlpha('Wonderful -World'))

console.log("isAlphaDigit WonderfulWorld20 => "+v.isAlphaDigit('WonderfulWorld20'))
console.log("isAlphaDigit Wonderful -World20 => "+v.isAlphaDigit('Wonderful -World20'))

console.log("isBlank list => "+v.isBlank(list))
console.log("isBlank   => "+v.isBlank(' '))

console.log("isDigit 6476752678 => "+v.isDigit('6476752678'))
console.log("isDigit 23.7=> "+v.isDigit('23.7 '))

console.log("isNumeric 64767526 => "+v.isNumeric('6476752678'))
console.log("isNumeric 23.7 => "+v.isNumeric('23.7 '))

console.log("isEmpty Wonderful World => "+v.isEmpty('Wonderful World'))
console.log("isEmpty   => "+v.isEmpty(' '))
console.log("isEmpty=> "+v.isEmpty(''))

console.log("isLowerCase WonderfulWorld => "+v.isLowerCase('WonderfulWorld'))
console.log("isLowerCase wonderfulworld => "+v.isLowerCase('wonderfulworld'))

console.log("isUpperCase WonderfulWorld => "+v.isUpperCase('WonderfulWorld'))
console.log("isUpperCase wonderfulworld => "+v.isUpperCase('WONDERFULWORLD'))

console.log("isString wonderfulworld => "+v.isString('Wonderful World'))
console.log("isString 34 => "+v.isString(34))

console.log("startsWith list Wond=> "+v.startsWith(list, 'Wond'))       
console.log("startsWith wa => "+v.startsWith(list, 'wa'))



console.log("***SPLIT***");

console.log("chars name => "+v.chars(name))

console.log("codePoints name=> "+v.codePoints(name))
console.log("graphemes name=> "+v.graphemes(name))
console.log("split newNames , => "+v.split(newNames),",")
console.log("split newNames  => "+v.split(newNames)," ")


console.log("words name => "+v.words(name))



console.log("***STRIP***");

console.log("stripBom \uFEFFWonderful World => "+v.stripBom('\uFEFFWonderful World'))

let tag=`<span><a href="#">Summer</a> is nice</span>`
console.log("tag="+tag)
console.log("stripTags tag =>"+v.stripTags('<span><a href="#">Summer</a> is nice</span>'))



console.log("***CHAIN***")

console.log("v name=> "+v(name)
.trim()
.truncate(7)
.upperCase())

console.log("v.chain name=> "+v.chain(name)
.trim()
.truncate(7)
.upperCase()
.value())

console.log("chain=> "+v
.chain(name)
.words()
.thru(function(words) {
  return words[1];
})
.value())

console.log("chain=> "+v
.chain(name)
.replace('Hello', 'Hi')
.lowerCase()
.slugify()
.value())

console.log("***FORMAT***");

console.log("sprintf %s gruntee $%d', coffee ,2=> "+v.sprintf('%s gruntee $%d', 'coffee', 2))
console.log(" sprintf sprintf%'*5s 'cat  =>" + v.sprintf("%'*5s", 'cat'))

console.log("vprintf=> "+v.vprintf('%s', ['Welcome']))
console.log("vprintf=> "+v.vprintf('%s has %d apples', ['Alexandra', 3]))

console.log("***UTIL***");
console.log(v.version)  


var elma = v.noConflict();
elma.isAlpha('Hello');                   
console.log(elma.isAlpha('Hello'))