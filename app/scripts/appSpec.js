describe('sign up form test', function() {

    var scope,
        element,
        compiled,
        html;

    beforeEach(module("myForm"));
    beforeEach(module('optin-template.html'));
    beforeEach(inject(function ($rootScope, $compile) {

        html = '<opt-in><div class="brand-logo"></div></opt-in>';

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();


    }));

    it('various tests', function(){
        expect(element.find('li').length).toBe(4);
        expect(element.find('input').length).toBe(3);
        expect(element.find('button').length).toBe(1);
        expect(element.find('button').text()).toContain('info');
        expect(element.find('button').attr('type')).toBe('submit');


    });


});
