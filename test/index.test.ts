import classes from '../src/index'
import { expect, test } from 'bun:test'

test(`"hello" => "hello"`, () => {
	expect(classes('hello')).toBe('hello')
})

test(`{ hello: true, word: false } => "hello"`, () => {
	expect(classes({ hello: true, word: false })).toBe('hello')
})

test(`['hello', 'word'] => "hello word"`, () => {
	expect(classes(['hello', 'word'])).toBe('hello word')
})

test(`['hello', { word: true }] => "hello word"`, () => {
	expect(classes(['hello', { word: true }])).toBe('hello word')
})
