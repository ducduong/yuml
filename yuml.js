/*-------------------------------------------------------------------------
 * Gui framework classes for the Web Client are stored in this file.
 *
 * DEPENDENCIES
 *  - Data.js
 *  - Utils.js
 *-------------------------------------------------------------------------*/


if (typeof yu == "undefined")
{
    yu = {};
}

yu.regexpTagNames = {
    valueOf        : /^(?=value_of:)./i,
    inline         : /^(?=inline:)./i,
    collectionOf   : /^(?=collection_of:)./i,
    scopeWith      : /^(?=scope_with:)./i,
    title          : /^title$/i
};

//yu.regexpInlineReplacement = /#{[^}]*}/g;

HTMLElement.prototype.isYuElement = function()
{
    return this.isValueOfElement() ||
           this.isCollectionOfElement() ||
           this.isInlineElement() ||
           this.isScopeWithElement() ||
           this.isTitleElement();
};

HTMLElement.prototype.isValueOfElement = function()
{
    return yu.regexpTagNames.valueOf.test(this.tagName);
};

HTMLElement.prototype.isInlineElement = function()
{
    return yu.regexpTagNames.inline.test(this.tagName);
};

HTMLElement.prototype.isCollectionOfElement = function()
{
    return yu.regexpTagNames.collectionOf.test(this.tagName);
};

HTMLElement.prototype.isScopeWithElement = function()
{
    return yu.regexpTagNames.scopeWith.test(this.tagName);
};

HTMLElement.prototype.isTitleElement = function()
{
    return yu.regexpTagNames.title.test(this.tagName);
};

HTMLElement.prototype.processYu = function(dataObjects)
{
    if (this.isValueOfElement())
    {
        this.processValueOf(dataObjects);
        return;
    }
    
    if (this.isScopeWithElement())
    {
        this.processScopeWith(dataObjects);
        return;
    }
    
    if (this.isCollectionOfElement())
    {
        this.processCollectionOf(dataObjects);
        return;
    }
    
    if (this.isInlineElement())
    {
        this.processInline(dataObjects);
        return;
    }
    
    if (this.isTitleElement())
    {
        this.processTitle(dataObjects);
        return;
    }
};

/*
* validate the 
*/

/*
* return a text node after processing the value_of node
* @param <value_of:xxx> node
*/
HTMLElement.processValueOf = function(parentDataObjects, node)
{
    var tagNameParts = this.tagName.split(/:/);
    
    
};

/*
* get all yu's nodes under particular node
* @param node: a valid HTML DOM node 
*/

yu.getNodes = function(node)
{
    var nodes = [];
    
    var childNodes = node.getElementsByTagName("*");
    
    for (var i = 0; i < childNodes.length; i++)
    {
        if (yu.regexpTagName.test(childNodes[i].tagName))
        {
            nodes.push(childNodes[i]);
        }
    }
    
    return nodes;
};
