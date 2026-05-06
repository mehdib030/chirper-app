import { formatDate, formatTweet } from './helpers'

describe('formatDate', () => {
  it('returns a formatted date string from a timestamp', () => {
    const timestamp = 1518122597860
    const result = formatDate(timestamp)
    expect(typeof result).toBe('string')
    expect(result).toContain('|')
  })
})

describe('formatTweet', () => {
  const tweet = {
    id: 'tweet1',
    likes: ['user1'],
    replies: ['reply1', 'reply2'],
    text: 'Hello world',
    timestamp: 1518122597860,
  }
  const author = {
    name: 'Sarah',
    avatarURL: 'http://example.com/avatar.jpg',
  }

  it('returns a formatted tweet object with correct properties', () => {
    const result = formatTweet(tweet, author, 'user1', null)
    expect(result).toEqual({
      name: 'Sarah',
      id: 'tweet1',
      timestamp: 1518122597860,
      text: 'Hello world',
      avatar: 'http://example.com/avatar.jpg',
      likes: 1,
      replies: 2,
      hasLiked: true,
      parent: null,
    })
  })

  it('sets hasLiked to false when authedUser has not liked', () => {
    const result = formatTweet(tweet, author, 'user2', null)
    expect(result.hasLiked).toBe(false)
  })

  it('includes parent info when parentTweet is provided', () => {
    const parentTweet = { author: 'dan', id: 'parent1' }
    const result = formatTweet(tweet, author, 'user1', parentTweet)
    expect(result.parent).toEqual({ author: 'dan', id: 'parent1' })
  })
})
