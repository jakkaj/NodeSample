import test from 'ava';

import { someService, someOtherService } from "./model/service/someService";
import { ISampleInterface, types } from "./model/contract/ISampleInterface";
import { injectable, inject } from "inversify";

import {glueInstance as glue} from "./model/glue";



test('foo', t => {
	t.pass();
});

test('testing instance is the same in glue', t =>{
	let s = glue.container.get<someOtherService>("aa");

	var g = glue.id;
	var result = s.doSomething();
	t.is(g, result);

})

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});