<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\UserScopeTrait;

class Question extends Model
{
    use UserScopeTrait;

    /**
     * Fillable fields for a Question
     *
     * @var array
     */

    protected $fillable = [
        'question',
        'description',
        'internal_notes',
        'reference'
    ];
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
}
