<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\UserScopeTrait;
use Auth;

class Question extends Model
{
    use UserScopeTrait;
    use SoftDeletes;

    /**
     * Fillable fields for a Question
     *
     * @var array
     */
    protected $fillable = [
        'type_id',
        'category_id',
        'subject',
        'question',
        'description',
        'internal_notes',
        'reference'
    ];

    /**
     * Get the tags record associated with the question.
     */
    public function tags()
    {
        return $this->hasOne('App\Models\Tags');
    }

    /**
     * Get the comments for the blog post.
     */
    public function answer()
    {
        return $this->hasMany('App\Models\Answer');
    }

    /**
     * A question has one type
     *
     * @return mixed
     */
    public function type()
    {
        return $this->hasOne('App\Models\Type');
    }
    /**
     * A question has one category
     *
     * @return mixed
     */
    public function category()
    {
        return $this->hasOne('App\Models\Category');
    }

    public function save(array $options = array())
    {
	    if(!$this->user_id)
        {
            $this->user_id = Auth::User()->id;
        }
	    return parent::save($options);
    }

}
